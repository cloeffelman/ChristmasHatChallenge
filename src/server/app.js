const express = require('express'),
      path = require('path'),
      app = express()

app.use(express.static(path.resolve(__dirname, '../../build')))

module.exports = app