"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 }); //here we are creating a web socket server 
wss.on('connection', function connection(ws) {
    console.log("finally we have made a web socket connection");
    ws.send('We made it Bro');
    setInterval(() => {
        ws.send('But At what cost bro ?');
        let num = Math.floor(Math.random() * 10000);
        ws.send(`Current My Balance is ${num}`);
    }, 1000);
});
