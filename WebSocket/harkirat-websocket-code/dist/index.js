"use strict";
// import { WebSocketServer ,WebSocket} from 'ws';
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
let allSockets = [];
wss.on('connection', (socket) => {
    console.log("User connected");
    socket.on('message', (data) => {
        console.log("Message received");
        try {
            const parsedObj = JSON.parse(data);
            if (parsedObj.type === "join") {
                // Add user to the room
                allSockets.push({
                    socket,
                    room: parsedObj.payload.roomId,
                });
                console.log(`User joined room: ${parsedObj.payload.roomId}`);
            }
            else if (parsedObj.type === "chat") {
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
                }
                else {
                    console.error("User not found in any room");
                }
            }
        }
        catch (error) {
            console.error("Error processing message:", error);
        }
    });
    socket.on('close', () => {
        // Remove the socket from the list when it disconnects
        allSockets = allSockets.filter((user) => user.socket !== socket);
        console.log("User disconnected");
    });
});
