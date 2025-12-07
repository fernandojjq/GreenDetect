const fs = require('fs');
const path = require('path');

const outputFileName = 'all_code.txt';
const scriptName = path.basename(__filename);

try {
    const files = fs.readdirSync(__dirname);
    let outputContent = '';

    files.forEach(file => {
        // Skip this script, the output file, and .png files
        // Also skipping .git directory or node_modules if they existed, though not seen in list
        if (file === scriptName || file === outputFileName || path.extname(file).toLowerCase() === '.png' || file.startsWith('.')) {
            return;
        }

        const filePath = path.join(__dirname, file);
        try {
            const stats = fs.statSync(filePath);

            if (stats.isFile()) {
                const content = fs.readFileSync(filePath, 'utf8');
                outputContent += `\n\n================================================================================\n`;
                outputContent += `FILE: ${file}\n`;
                outputContent += `================================================================================\n\n`;
                outputContent += content;
                outputContent += `\n`;
            }
        } catch (err) {
            console.error(`Error reading ${file}: ${err.message}`);
        }
    });

    fs.writeFileSync(path.join(__dirname, outputFileName), outputContent);
    console.log(`Successfully extracted code to ${outputFileName}`);

} catch (err) {
    console.error(`Error: ${err.message}`);
}
