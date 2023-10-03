const { build } = require('esbuild');

// Define your ESBuild options
const esbuildOptions = {
  entryPoints: ['./src/main.ts'], // Adjust this path as per your project structure
  bundle: true,
  outfile: './dist/main.js', // Adjust the output path as needed
};

// Run the ESBuild build process
async function runBuild() {
  try {
    await build(esbuildOptions);
    console.log('ESBuild completed successfully.');
  } catch (err) {
    console.error('ESBuild error:', err);
    process.exit(1);
  }
}

runBuild();
