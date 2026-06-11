import fs from "node:fs";
import path from "node:path";

const root = path.resolve(new URL("..", import.meta.url).pathname);
const skillsDir = path.join(root, "skills");
const namePattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const variablePattern = /^[A-Z_][A-Z0-9_]*$/;
const secretPatterns = [
  /sk-[A-Za-z0-9_-]{20,}/,
  /ghp_[A-Za-z0-9_]{20,}/,
  /github_pat_[A-Za-z0-9_]{20,}/,
  /xox[baprs]-[A-Za-z0-9-]{20,}/,
  /(?:api[_-]?key|password|token|secret)\s*[:=]\s*["']?[A-Za-z0-9_./+=-]{16,}/i,
  /(?:api[_-]?key|password|token|secret)[^\n]{0,60}[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i
];

function fail(message) {
  console.error(`FAIL ${message}`);
  process.exitCode = 1;
}

function readSkillFrontmatter(file) {
  const text = fs.readFileSync(file, "utf8");
  const match = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) {
    return { text, frontmatter: null };
  }
  const frontmatter = {};
  for (const line of match[1].split("\n")) {
    const kv = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (kv) {
      frontmatter[kv[1]] = kv[2].replace(/^["']|["']$/g, "");
    }
  }
  return { text, frontmatter };
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if ([".git", "node_modules", "dist", "build"].includes(entry.name)) continue;
      files.push(...walk(full));
    } else {
      files.push(full);
    }
  }
  return files;
}

if (!fs.existsSync(skillsDir)) {
  fail("missing skills directory");
} else {
  for (const dirent of fs.readdirSync(skillsDir, { withFileTypes: true })) {
    if (!dirent.isDirectory()) continue;
    const skillName = dirent.name;
    const skillFile = path.join(skillsDir, skillName, "SKILL.md");
    if (!fs.existsSync(skillFile)) {
      fail(`${skillName} is missing SKILL.md`);
      continue;
    }

    const { text, frontmatter } = readSkillFrontmatter(skillFile);
    if (!frontmatter) {
      fail(`${skillName}/SKILL.md is missing YAML frontmatter`);
      continue;
    }

    if (frontmatter.name !== skillName) {
      fail(`${skillName}/SKILL.md name must match directory`);
    }
    if (!namePattern.test(frontmatter.name ?? "")) {
      fail(`${skillName}/SKILL.md name is not lowercase hyphenated`);
    }
    if (!frontmatter.description || frontmatter.description.length > 1024) {
      fail(`${skillName}/SKILL.md description must be 1-1024 chars`);
    }
    if (text.split("\n").length > 500) {
      fail(`${skillName}/SKILL.md should stay below 500 lines`);
    }
  }
}

const catalogPath = path.join(root, "catalog.json");
if (!fs.existsSync(catalogPath)) {
  fail("missing catalog.json");
} else {
  const catalog = JSON.parse(fs.readFileSync(catalogPath, "utf8"));
  if (!Array.isArray(catalog.skills)) {
    fail("catalog.json skills must be an array");
  } else {
    for (const skill of catalog.skills) {
      if (!skill.name || !namePattern.test(skill.name)) {
        fail(`catalog skill has invalid name: ${skill.name}`);
      }
      const expectedPath = path.join(root, skill.path ?? "");
      if (!skill.path || !fs.existsSync(path.join(expectedPath, "SKILL.md"))) {
        fail(`catalog skill path missing SKILL.md: ${skill.path}`);
      }
      if (skill.path && path.basename(skill.path) !== skill.name) {
        fail(`catalog skill name/path mismatch: ${skill.name}`);
      }
    }
  }
}

for (const file of walk(root)) {
  const rel = path.relative(root, file);
  const text = fs.readFileSync(file, "utf8");
  for (const pattern of secretPatterns) {
    if (pattern.test(text)) {
      fail(`${rel} appears to contain a secret-like value`);
    }
  }

  for (const match of text.matchAll(/\$([A-Z_][A-Z0-9_]*)/g)) {
    if (!variablePattern.test(match[1])) {
      fail(`${rel} has invalid variable name ${match[1]}`);
    }
  }
}

if (!process.exitCode) {
  console.log("PASS skill validation");
}
