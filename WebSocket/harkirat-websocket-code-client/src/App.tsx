import { useEffect, useRef, useState } from "react";
//   const [socket, setSocket] = useState<WebSocket>();
//   const [message, setMessage] = useState('');

//   function sendMessage() {
//     if (socket && socket.readyState === WebSocket.OPEN) {
//       socket.send(message);
//       setMessage('');
//     } else {
//       console.error('WebSocket is not open');
//     }
//   }

//   useEffect(() => {
//     const ws = new WebSocket('ws://localhost:8080');
//     setSocket(ws);

//     ws.onmessage = (ev) => {
//       alert(ev.data);
//     };

//     return () => {
//       ws.close();
//     };
//   }, []);

//   return (
//     <>
//       <input
//         type="text"
//         placeholder="Message..."
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       />
//       <button onClick={sendMessage}>Send</button>
//     </>
//   );
// }

// export default App;
function App() {
  // const [socket, setSocket] = useState<WebSocket>();
  // const inputRef = useRef();

  // function SendMessage(){
  //   if(!socket)return;
  //   const message=inputRef?.current?.value;
  //   socket.send(message);//rather than hardcoding the "ping over here we will use UseRef and in that we will extract the curr value in that and that value we will send to backend
  // } 
  const [ws, setWs] = useState<WebSocket>();
  const [message, setMessage] = useState(' ');
  function SendMessage() {
    ws?.send(message);
  }
  useEffect(() => {
    //here we are defining our socket connect with backend
    const ws = new WebSocket("ws://localhost:8080");
    setWs(ws);
    ws.onmessage = ((ev) => {
      console.log(ev.data);
      setMessage(message);
      ws.send(message);
    })
    return (() => {
      ws.close();
    })
  }, [])

  return (
    <div>
      <input type="text" placeholder="Message..." />
      <button onClick={SendMessage}>send</button>
    </div>
  )
}
export default App;