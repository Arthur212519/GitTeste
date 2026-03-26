const fs = require('fs');
const path = require('path');

// Simple task automation - Monitor a directory
const directoryToWatch = './files';

// Create directory if it doesn't exist
if (!fs.existsSync(directoryToWatch)) {
    fs.mkdirSync(directoryToWatch);
}

// Watch for file changes
fs.watch(directoryToWatch, (eventType, filename) => {
    if (filename) {
        console.log(`Event: ${eventType}`);
        console.log(`File: ${filename}`);
        console.log(`Timestamp: ${new Date().toLocaleString()}`);
    }
});

console.log(`Watching directory: ${directoryToWatch}`);