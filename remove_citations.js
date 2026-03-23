const fs = require('fs');
const path = require('path');

const dirPath = __dirname;
const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.json'));

// Expresión regular para buscar "[cite: " seguido de cualquier número y un "]"
// Ejemplos que atrapa: "[cite: 1]", "[cite:45]", "[cite: 12 ]", "[cite: 12-15]", "[cite: 12, 13]"
const citeRegex = /\[cite:[\s\d,\-]+\]/g;

files.forEach(file => {
    const filePath = path.join(dirPath, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Reemplaza todas las coincidencias con un string vacío
    content = content.replace(citeRegex, '');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Citations removed from ${file}`);
});
console.log("All JSON files cleaned of citations!");
