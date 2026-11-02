// Downloads every image listed in manifest.json into <slug>/ folders.
// Usage: node assets/iphones/download.mjs   (skips files that already exist)
import { readFile, writeFile, mkdir, access } from "node:fs/promises";
import { dirname, join, extname } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const { models } = JSON.parse(await readFile(join(root, "manifest.json"), "utf8"));

const exists = (p) => access(p).then(() => true, () => false);
let ok = 0, skipped = 0, failed = [];

for (const m of models) {
  const jobs = [["lineup", m.lineup], ...Object.entries(m.images ?? {})];
  for (const [name, url] of jobs) {
    const file = join(root, m.slug, name + extname(new URL(url).pathname));
    if (await exists(file)) { skipped++; continue; }
    const res = await fetch(url);
    if (!res.ok) { failed.push(`${m.slug}/${name}: HTTP ${res.status}`); continue; }
    await mkdir(dirname(file), { recursive: true });
    await writeFile(file, Buffer.from(await res.arrayBuffer()));
    ok++;
  }
}

console.log(`downloaded ${ok}, skipped ${skipped}, failed ${failed.length}`);
failed.forEach((f) => console.log("  FAIL " + f));
