const express = require('express');
const app = express();
const httpServer = require('http').createServer(app);

// colocar o cors mais tarde
const io = require('socket.io')(httpServer);

io.on('connection', (socket) => {
  console.log(`Usuario novo conectado ${socket.id}`);
})

app.set('view engine', 'ejs');

app.get('/', (_req, res) => {
  res.render('home');
});

httpServer.listen('3000');
