const express = require('express');
const app = express();
const httpServer = require('http').createServer(app);

// colocar o cors mais tarde
const io = require('socket.io')(httpServer);

const users = [];

io.on('connection', (socket) => {
  io.emit('newMessage', `Usuário ${socket.id} se conectou`)

  users.push({socketId: socket.id});

  io.emit('updateUsers', users);

  socket.on('message', (message) => {
    console.log(message);
    io.emit('newMessage', message);

    socket.emit('xyz', 'só para o remetente');

    socket.broadcast.emit('brodicastMensage', 'para todos de menos o mensageiro');
  });

  socket.on('disconnect', () => {
    const userIndex = users.findIndex((u) => u.socketId === socket.id);
    users.splice(userIndex, 1);
    io.emit('newMessage', `Usuário ${socket.id} se desconectou`)
  })
});

app.set('view engine', 'ejs');

app.get('/', (_req, res) => {
  res.render('home');
});

httpServer.listen('3000');
