"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 }); //created web socket
// const app=express();
// app.listen(3000);//here the express starts the server as similarly in the line 3 it will only starts the web socket server
let ct = 0;
wss.on('connection', (socket) => {
    socket.on('error', console.error);
    // wss.broa
    socket.on("message", (event) => {
        wss.clients.forEach((client) => {
            console.log(client.send(event));
            client.send(event);
        });
        console.log("message received from the client => " + event.toString());
        setTimeout(() => {
            socket.send(event.toString() + ": sent from the user");
        }, 2000);
    });
    ct++;
    console.log("user connected", ct);
});
console.log(ct);
