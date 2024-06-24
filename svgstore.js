import svgstore from "@droppyjs/svgstore";
import fs from "fs";
import path from "path";

// let sprites = svgstore().add(
//   "donors-ahalar",
//   fs.readFileSync("./src/icons/donors-ahalar.svg", "utf8")
// );

// fs.writeFileSync("./src/icons/sprites.svg", sprites);

// Directory containing your SVG files
const svgDir = "./src/icons";

// Output file path
const outputPath = "./public/sprite.svg";

// Create a new SVGStore instance
const sprite = svgstore();

// Read SVG files from the directory
fs.readdirSync(svgDir).forEach((file) => {
  if (path.extname(file).toLowerCase() === ".svg") {
    const name = path.basename(file, ".svg");
    const filepath = path.join(svgDir, file);
    const svg = fs.readFileSync(filepath, "utf8");
    sprite.add(name, svg);
  }
});

// Write the sprite to a file
fs.writeFileSync(outputPath, sprite.toString());

console.log(`SVG sprite created at ${outputPath}`);
