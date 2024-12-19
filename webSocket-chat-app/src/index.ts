// import WebSocket, { WebSocketServer } from 'ws';
// import  express  from 'express';
// const wss = new WebSocketServer({ port: 8080 });//created web socket

import { WebSocketServer } from "ws";

// // const app=express();
// // app.listen(3000);//here the express starts the server as similarly in the line 3 it will only starts the web socket server
// let ct=0;
// let allSocket=[];
// wss.on('connection',(socket)=>{
//     allSocket.push(socket);
//     socket.on('error', console.error);
//     // wss.broa
//     socket.on("message",(event)=>{
//         allSocket.forEach((client)=>{
//             console.log(client.send(event.toString()))
//             client.send(event);
//         })
//         console.log("message received from the client => "+event.toString());
//         setTimeout(()=>{
//             socket.send(event.toString()+": sent from the user")
            
//         },2000)
//     })
//     ct++;
//     console.log("user connected",ct)
// })
// console.log(ct);

const wss=new WebSocketServer({port:8080});
let allSocket=[];
wss.on('connection',(socket)=>{
    allSocket.push(socket);
})