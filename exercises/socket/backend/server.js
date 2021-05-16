const express = require('express');
const app = express();
const httpServer = require('http').createServer(app);

// colocar o cors mais tarde
const io = require('socket.io')(httpServer);

const users = [];

io.on('connection', (socket) => {
  console.log(`Usuario novo conectado ${socket.id}`);

  users.push({socketId: socket.id});

  io.emit('updateUsers', users);

  socket.on('message', (message) => {
    console.log(message);
    io.emit('newMessage', message);

    socket.emit('xyz', 'só para o remetente');

    socket.broadcast.emit('brodicastMensage', 'para todos de menos o mensageiro');
  });

  socket.on('disconnect', () => {
    console.log(`Usúario ${socket.id} desconectou`);
    // const user = users.find(u => u.socketId === socket.id);
  })
});

app.set('view engine', 'ejs');

app.get('/', (_req, res) => {
  res.render('home');
});

httpServer.listen('3000');
