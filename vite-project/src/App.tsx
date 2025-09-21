// import { use, useEffect, useState } from "react";
// import App2 from "./component/page2";

import { useState } from "react";
import App3 from "./component/page3/page3";
import App4 from "./component/page4/page4";
import Page5 from "./component/page5/page5";

// interface ProfileCard {
//   name: string;
//   age: number;
//   work: string;
//   rollno: string;
//   gender: string;
// }

// function NotificationCt() {
//   const [ct, setct] = useState(0);
//   const IncrementFn = () => setct(ct + 1);

//   return (
//     <>
//       <h1>Count for this Component: {ct}</h1>
//       <button onClick={IncrementFn}>Increment</button>
//     </>
//   );
// }

// function ProfileCard({ name, age, rollno, work, gender }: ProfileCard) {
//   return (
//     <div style={{
//       border: '1px solid #151313ff',
//       padding: '16px',
//       borderRadius: '8px',
//       textAlign: 'center',
//       width: '200px',
//       backgroundColor: '#6ce1eaff',
//       color: "white"
//     }}>
//       <h2>About me?</h2>
//       <h3>Hey this is me name: {name}</h3>
//       <h3>Hey this is me age: {age}</h3>
//       <h3>Hey this is me rollno: {rollno}</h3>
//       <h3>Hey this is me work: {work}</h3>
//       <h3>Hey this is me gender: {gender}</h3>
//       <h3>My work is SDE-1</h3>
//     </div>
//   );
// }

// function ProfileCard2({ name, age, rollno, work, gender }: ProfileCard) {
//   return (
//     <div style={{
//       border: '1px solid #130e0eff',
//       padding: '16px',
//       borderRadius: '8px',
//       textAlign: 'center',
//       width: '200px',
//       backgroundColor: '#ee9e35ff',
//       color: "white"
//     }}>
//       <h2>About me?</h2>
//       <h3>Hey this is you name: {name}</h3>
//       <h3>Hey this is you age: {age}</h3>
//       <h3>Hey this is you rollno: {rollno}</h3>
//       <h3>Hey this is you work: {work}</h3>
//       <h3>Hey this is you gender: {gender}</h3>
//       <h3>My work is SDE-1</h3>
//     </div>
//   );
// }

// function UpdateCt() {
//   const [ct, setCt] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCt(prevCt => prevCt + 1);  // increment every 30 seconds
//     }, 30000); // 30000ms = 30 seconds

//     return () => clearInterval(intervalId); // cleanup interval on unmount
//   }, []);

//   return (
//     <>
//       hi ct is {ct}
//     </>
//   );
// }

export default function App() {
  const [vis, isVis] = useState(true);
  // const [visible, setVisible] = useState(true);
  // const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // const [people, setPeople] = useState<ProfileCard[]>([
  //   {
  //     name: "Jatin",
  //     age: 25,
  //     work: "Developer",
  //     rollno: "001",
  //     gender: "Male"
  //   },
  //   {
  //     name: "Ananya",
  //     age: 24,
  //     work: "Designer",
  //     rollno: "002",
  //     gender: "Female"
  //   },
  //   {
  //     name: "Ravi",
  //     age: 26,
  //     work: "Tester",
  //     rollno: "003",
  //     gender: "Male"
  //   },
  //   {
  //     name: "Ravi",
  //     age: 26,
  //     work: "Tester",
  //     rollno: "003",
  //     gender: "Male"
  //   }
  // ]);
  // const [feed, setFeed] = useState('Home');
  // const buttons = ["Home", "Network", "Jobs", "Messaging", "Notification", "Me"];
  // const handleMouseEnter = (index: number) => {
  //   setHoveredIndex(index);
  // };

  // const handleMouseLeave = () => {
  //   setHoveredIndex(null);
  // };
  // const toggleView = () => {
  //   setVisible((v) => !v);
  // };

  // const AddPost = () => {
  //   setPeople((prevPeople) => [
  //     ...prevPeople,
  //     {
  //       name: "Jedex",
  //       age: 28,
  //       work: "Dev",
  //       rollno: "010",
  //       gender: "M"
  //     }
  //   ]);
  // };

  // const profileCards = people.map((person, index) =>
  //   visible ? (
  //     <ProfileCard key={index} {...person} />
  //   ) : (
  //     <ProfileCard2 key={index} {...person} />
  //   )
  // );
  // const styleButton = { backgroundColor: hoveredIndex ? '#1abc9c' : '#f1c40f', }
  return (
    // <div style={{ backgroundColor: '#29b933ff', minHeight: '100vh', padding: '20px' }}>
    //   <div style={{ textAlign: 'center', marginBottom: '20px' }}>
    //     <button onClick={toggleView}>Toggle Profile Cards</button>
    //     <button onClick={AddPost}>Add Post</button>
    //   </div>

    //   <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
    //     {profileCards}
    //   </div>

    //   <NotificationCt />
    //   <NotificationCt />
    //   <NotificationCt />
    <>
      {/* <UpdateCt /> */}
      {/* {buttons.map((btn, index) => {
        const styleButton = {
          backgroundColor: hoveredIndex === index ? '#2c3e50' : '#95a5a6',
          margin: '5px',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          color: 'white',
          fontWeight: 'bold',
        };
        return (
          <button
            key={btn}
            onClick={() => setFeed(btn)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            style={styleButton}
          >
            {btn}

          </button >


        )
      })}
      <div style={{ marginTop: '20px', color: '#333', fontWeight: 'bold' }}>
        Current feed: {feed}
      </div> */}
      {/* <button onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} style={{ ...styleButton }}>Home</button>
      <button onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} style={{ ...styleButton }}>Network</button>
      <button onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} style={styleButton}>Jobs</button>
      <button onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} style={styleButton}>messaging</button>
      <button onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} style={styleButton}>notification</button>
      <button onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} style={styleButton}>me</button> */}
      {/* <App4 />
      <button onClick={() => isVis(!vis)}>Toggle App3</button>
      {vis && <App3 />} */}
      <Page5 />
    </>
    // </div>
  );
}
