const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  socket.emit("chat message", "HELLO TEST");
});

http.listen(3000, () => {
  console.log("listening on *:3000");
});
