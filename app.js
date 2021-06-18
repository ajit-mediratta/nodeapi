const express = require('express');
const app = express();
var port = process.env.PORT || 3000;
const { version } = require('./package.json');

app.get('/', (req, res) => {
  res.json({ version });
});

app.listen(port, () => {
  console.log(`Started on port ${port}`)
})