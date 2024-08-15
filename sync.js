const { exec } = require('child_process');
const chokidar = require('chokidar');

// Path to the parent directory containing subfolders
const parentDir = '/Users/Stephen/Documents/Freelance/Local Repositories'; // Change this to your parent directory

// Initialize watcher to monitor all subdirectories
const watcher = chokidar.watch(`${parentDir}/**/*`, {
    persistent: true,
    ignoreInitial: true,
    ignored: /(^|[\/\\])\.git/, // Ignore the .git directory
});

watcher.on('all', (event, path) => {
    console.log(`Detected change: ${event} on ${path}`); // Log detected changes
    exec(`cd "${parentDir}" && git add . && git commit -m "Auto-commit: ${event} on ${path}" && git push`, (err, stdout, stderr) => {
        if (err) {
            console.error(`Error: ${stderr}`);
        } else {
            console.log(`Success: ${stdout}`);
        }
    });
});

console.log(`Watching for changes in ${parentDir}...`);