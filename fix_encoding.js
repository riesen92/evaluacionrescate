const fs = require('fs');
const path = require('path');

const dirPath = __dirname;
const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.json'));

const replacements = {
    'Ã¡': 'á',
    'Ã©': 'é',
    'Ã­': 'í',
    'Ã³': 'ó',
    'Ãº': 'ú',
    'Ã±': 'ñ',
    'Ã‘': 'Ñ',
    'Â¿': '¿',
    'Â¡': '¡',
    'Ã“': 'Ó',
    'Ã\x81': 'Á',
    'Ã\x89': 'É',
    'Ã\x8D': 'Í',
    'Ã\x9A': 'Ú',
    'Â°': '°'
};

files.forEach(file => {
    const filePath = path.join(dirPath, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    for (const [bad, good] of Object.entries(replacements)) {
        content = content.split(bad).join(good);
    }
    content = content.replace(/Â/g, '');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed encoding in ${file}`);
});
console.log("All JSON files fixed!");
