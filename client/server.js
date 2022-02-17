const port = process.env.PORT || 3000;
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors())

app.use(express.static(path.join(__dirname, 'dist')));
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.listen(port);

console.log(`server started ${port}`)
