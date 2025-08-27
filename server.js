const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  socket.on("addProduct", (product) => {
    console.log("New product:", product);
    io.emit("productAdded", product);
  });

  socket.on("updateProduct", (product) => {
    console.log("Updated product:", product);
    io.emit("productUpdated", product);
  });

  socket.on("deleteProduct", (id) => {
    console.log("Deleted product:", id);
    io.emit("productDeleted", id);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

httpServer.listen(3001, () => {
  console.log("Socket server running on http://localhost:3001");
});
