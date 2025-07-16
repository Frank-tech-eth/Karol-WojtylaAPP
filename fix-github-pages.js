const fs = require('fs');
const path = require('path');

// Leer el archivo index.html
const indexPath = path.join(__dirname, 'docs', 'index.html');
let content = fs.readFileSync(indexPath, 'utf8');

// Reemplazar las rutas de los archivos JavaScript para que usen la ruta base
content = content.replace(
  /href="([^"]*\.js)"/g,
  'href="/Karol-WojtylaAPP/$1"'
);

content = content.replace(
  /src="([^"]*\.js)"/g,
  'src="/Karol-WojtylaAPP/$1"'
);

// Escribir el archivo corregido
fs.writeFileSync(indexPath, content);

console.log('✅ Archivo index.html corregido para GitHub Pages'); 