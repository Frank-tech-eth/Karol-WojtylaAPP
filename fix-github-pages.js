const fs = require('fs');
const path = require('path');

// Leer el archivo index.html
const indexPath = path.join(__dirname, 'docs', 'index.html');
let content = fs.readFileSync(indexPath, 'utf8');

// Reemplazar las rutas absolutas por rutas relativas
content = content.replace(
  /href="\/Karol-WojtylaAPP\/([^"]*\.js)"/g,
  'href="./$1"'
);

content = content.replace(
  /src="\/Karol-WojtylaAPP\/([^"]*\.js)"/g,
  'src="./$1"'
);

// También corregir las rutas de CSS
content = content.replace(
  /href="\/Karol-WojtylaAPP\/([^"]*\.css)"/g,
  'href="./$1"'
);

// Escribir el archivo corregido
fs.writeFileSync(indexPath, content);

console.log('✅ Archivo index.html corregido con rutas relativas para GitHub Pages'); 
console.log('✅ Archivo index.html corregido para GitHub Pages'); 