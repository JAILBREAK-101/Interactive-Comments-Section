const io = require("socket.io")(3000, {
    cors: {
        origin: ['http://localhost:8080']
    }
});

io.on("connection", (socket) => {
  // random id assigned to each person as they connect
  console.log(socket.id);
});
