// import { WebSocketServer ,WebSocket} from 'ws';

import { WebSocketServer,WebSocket } from "ws";

// const wss = new WebSocketServer({ port: 8080 });//here we are creating a web socket server 

// // wss.on('connection', function connection(ws) {//on this event of connection after establishing an connection we will perform some operations 
// //     console.log("finally we have made a web socket connection")
// //    ws.send('We made it Bro')
// //    setInterval(()=>{
// //     ws.send('But At what cost bro ?');
// //     let num:number=Math.floor(Math.random()*10000);
// //     ws.send(`Current My Balance is ${num}`);
// //    },1000)
// // });


// // wss.on('connection',(socket)=>{
// //     console.log("user connected");

// //     socket.on("message",(e)=>{
// //         console.log(e.toLocaleString(),'df')
// //         if(e.toString()==="ping"){
// //             socket.send("pong"); 
// //         }
// //     })

// //     const id=setInterval(()=>{
// //        socket.send("hello")
// //     },1100);

// //     clearInterval(id);
// // })
// let allSocket:WebSocket[]=[];
// wss.on('connection',(socket)=>{
//     allSocket.push(socket);
//     console.log("user was connected");
//     socket.on("message",(event)=>{
//         setTimeout(()=>{
//             allSocket.forEach((i)=>{//[socket1,socket2,socket3] i will be socket1
//                 if(i!==socket&&i.readyState===WebSocket.OPEN){
//                     i.send(event.toLocaleString());//sending message to the other client expect the sender
//                 }
//             })

//             //send confirmation to the sender 
//             if(socket.readyState===WebSocket.OPEN){
//                 socket.send("message has been broadcasted successfully")
//             }
//         },2000)
//         console.log(event.toString,"hi everyone");
//         socket.on('close',()=>{
//         allSocket=allSocket.filter((s)=>{
//             return s!=socket;
//         })
//         console.log("A User has been connected");
//        })
//     })
// }) 

interface User {
    socket: WebSocket;
    room: string;
}

const wss = new WebSocketServer({ port: 8080 });
let allSockets: User[] = [];

wss.on('connection', (socket) => {
    console.log("User connected");

    socket.on('message', (data) => {
        console.log("Message received");

        try {
            const parsedObj = JSON.parse(data as unknown as string);

            if (parsedObj.type === "join") {
                // Add user to the room
                allSockets.push({
                    socket,
                    room: parsedObj.payload.roomId,
                });
                console.log(`User joined room: ${parsedObj.payload.roomId}`);
            } else if (parsedObj.type === "chat") {
                // Find the room of the current user
                const currentUser = allSockets.find((user) => user.socket === socket);

                if (currentUser) {
                    const currentUserRoom = currentUser.room;

                    // Broadcast the message to all users in the same room
                    allSockets.forEach((user) => {
                        if (user.room === currentUserRoom) {
                            user.socket.send(parsedObj.payload.message);
                        }
                    });
                } else {
                    console.error("User not found in any room");
                }
            }
        } catch (error) {
            console.error("Error processing message:", error);
        }
    });

    socket.on('close', () => {
        // Remove the socket from the list when it disconnects
        allSockets = allSockets.filter((user) => user.socket !== socket);
        console.log("User disconnected");
    });
});
