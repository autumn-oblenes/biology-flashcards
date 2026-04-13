const fs = require('fs');
const content = fs.readFileSync('data.js', 'utf8');
// Extract the qCardData array content
const match = content.match(/const qCardData = (\[[\s\S]*?\]);/);
if (match) {
    // This is a bit hacky but works for the structure seen
    // We want the 4th unit (index 3)
    // To avoid complex parsing of unquoted keys, we'll try to find the Unit 4 block
    const unitsMatch = content.match(/id:\s*"unit-4"[\s\S]*?cards:\s*(\[[\s\S]*?\])\s*\n\s*}/);
    if (unitsMatch) {
        const cardsText = unitsMatch[1];
        const aImgRegex = /aImg:\s*"(.*?)"/g;
        let paths = [];
        let m;
        while ((m = aImgRegex.exec(cardsText)) !== null) {
            paths.push(m[1]);
        }
        // Cards 104-306 (indices 103-305)
        const selectedPaths = paths.slice(103, 306);
        selectedPaths.forEach(p => console.log(p));
    }
}
