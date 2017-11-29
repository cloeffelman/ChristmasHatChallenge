const express = require('express'),
      path = require('path'),
      app = express()

app.use(express.static(path.resolve(__dirname, '../../build')))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../build/index.html'));
})

module.exports = app