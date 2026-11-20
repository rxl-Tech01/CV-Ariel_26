import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { profileData } from "./src/data/profile.js";
import { hardSkillGroups, softSkills } from "./src/data/skills.js";
import { projectsData } from "./src/data/projects.js";
import { careerData } from "./src/data/career.js";

// 1. Verify legacy-static backup is intact
const legacyFiles = [
  "index.html",
  "about.html",
  "projects.html",
  "career.html",
  "style.css",
  "script.js",
];
for (const file of legacyFiles) {
  assert.ok(
    fs.existsSync(path.join("legacy-static", file)),
    `Missing legacy backup file: legacy-static/${file}`
  );
}

// 2. Verify package-lock.json exists for npm ci
assert.ok(fs.existsSync("package-lock.json"), "Missing package-lock.json");

// 3. Verify photo & 10 certificates exist in public/ and dist/
assert.equal(profileData.certificates.length, 10, "Must have 10 certificates");
const assetPaths = [
  profileData.photo,
  ...profileData.certificates.map((c) => c.file),
];
for (const relPath of assetPaths) {
  assert.ok(
    fs.existsSync(path.join("public", relPath)),
    `Missing public asset: public/${relPath}`
  );
  assert.ok(
    fs.existsSync(path.join("dist", relPath)),
    `Missing built dist asset: dist/${relPath}`
  );
}

// 4. Verify 4 hard skill groups & 7 confirmed soft skills
assert.equal(hardSkillGroups.length, 4, "Must have 4 hard skill groups");
assert.equal(softSkills.length, 7, "Must have 7 soft skills");
const expectedSoftSkills = [
  "Problem Solving",
  "Teamwork",
  "Communication",
  "Adaptability",
  "Time Management",
  "Self-Learning",
  "Analytical Thinking",
];
assert.deepEqual(
  softSkills.map((s) => s.name),
  expectedSoftSkills
);

// 5. Verify 3 projects and factual constraints
assert.equal(projectsData.length, 3, "Must have 3 projects");
const [quotaNode, smartLock, leafSense] = projectsData;
assert.equal(quotaNode.id, "quotanode");
assert.ok(quotaNode.process.some((p) => p.includes("hmac.compare_digest")));
assert.ok(quotaNode.outcomeBullets.length === 3);
assert.equal(smartLock.id, "smart-door-lock");
assert.equal(smartLock.repoUrl, null, "Smart Door Lock must not have fake repo URL");
assert.equal(leafSense.id, "leafsense-ai");
assert.ok(leafSense.objective.includes("Muda, Sedang, dan Tua"));

// 6. Verify Career & Competency data completeness
assert.equal(careerData.competencyAnalysis.pillars.length, 3);
assert.equal(careerData.swot.length, 4);
assert.equal(careerData.careerOptions.length, 3);
assert.ok(careerData.careerOptions[0].primary);
assert.equal(careerData.gapAnalysis.length, 5);
assert.equal(careerData.roadmap.length, 4);
assert.equal(careerData.actionPlan.length, 4);
assert.equal(careerData.developmentStrategies.length, 4);
assert.equal(careerData.periodicEvaluation.length, 3);

// 7. Verify production build output in dist/
const distHtml = fs.readFileSync(path.join("dist", "index.html"), "utf8");
assert.ok(distHtml.includes('<div id="root"></div>'));
const distCssFiles = fs
  .readdirSync(path.join("dist", "assets"))
  .filter((f) => f.endsWith(".css"));
assert.ok(distCssFiles.length >= 1, "Missing built CSS bundle");
const cssContent = fs.readFileSync(
  path.join("dist", "assets", distCssFiles[0]),
  "utf8"
);
assert.ok(cssContent.includes("@media print"), "Print stylesheet missing from CSS bundle");

console.log("ALL MIGRATION CHECKS PASSED:", {
  legacyBackups: legacyFiles.length,
  certificates: profileData.certificates.length,
  hardSkillGroups: hardSkillGroups.length,
  softSkills: softSkills.length,
  projects: projectsData.length,
  distAssets: fs.readdirSync(path.join("dist", "assets")),
});
