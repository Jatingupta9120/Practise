import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });//here we are creating a web socket server 

// wss.on('connection', function connection(ws) {//on this event of connection after establishing an connection we will perform some operations 
//     console.log("finally we have made a web socket connection")
//    ws.send('We made it Bro')
//    setInterval(()=>{
//     ws.send('But At what cost bro ?');
//     let num:number=Math.floor(Math.random()*10000);
//     ws.send(`Current My Balance is ${num}`);
//    },1000)
// });


wss.on('connection',(socket)=>{
    console.log("user connected");

    socket.on("message",(e)=>{
        console.log(e)
        if(e.toString()==="ping"){
            socket.send("pong");
        }
    })
})