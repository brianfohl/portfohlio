const fs = require('fs');
const path = require('path');

// Files to exclude from deployment due to size
const filesToExclude = [
  'public/podcast.wav'
];

console.log('Checking for large files to exclude...');

filesToExclude.forEach(file => {
  const fullPath = path.join(__dirname, file);
  
  if (fs.existsSync(fullPath)) {
    const stats = fs.statSync(fullPath);
    const fileSizeMB = stats.size / (1024 * 1024);
    
    console.log(`Found ${file} (${fileSizeMB.toFixed(2)} MB), backing up...`);
    
    // Create a backup by renaming
    fs.renameSync(fullPath, `${fullPath}.bak`);
    
    // Create a placeholder file with a note
    fs.writeFileSync(fullPath.replace('.wav', '.mp3'), '');
    
    console.log(`Created placeholder MP3 file`);
  } else {
    console.log(`${file} not found, skipping...`);
  }
});

console.log('Finished excluding large files.');
