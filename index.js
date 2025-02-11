const express = require('express');
const multer = require('multer');
const turf = require('@turf/turf');
const fs = require('fs');

const app = express();
const upload = multer({ dest: 'uploads/' });

// Rota para upload de GeoJSON
app.post('/api/upload', upload.single('file'), (req, res) => {
  const filePath = req.file.path;
  const geojson = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  // Processar validação de topologia com Turf.js
  const errors = [];
  geojson.features.forEach((feature, index) => {
    if (feature.geometry.type === 'Polygon' || feature.geometry.type === 'MultiPolygon') {
      const isValid = turf.booleanValid(feature);
      if (!isValid) {
        errors.push(`Erro de topologia no polígono ${index + 1}`);
      }
    }
  });

  fs.unlinkSync(filePath); // Remove o arquivo temporário
  res.json({ success: true, errors });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
