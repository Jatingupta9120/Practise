import './App.css';
import { useState } from 'react';

function App() {
  const [isTrue, setIsTrue] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // Use state for people array
  const [people, setPeople] = useState([
    { id: 1, firstName: "Jatin", lastName: "Kumar" },
    { id: 2, firstName: "Ansh", lastName: "Kumar" },
    { id: 3, firstName: "Ashu", lastName: "Kumar" },
  ]);

  const handleToggle = () => {
    setIsTrue(!isTrue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${firstName} ${lastName}`);

    // Add new person to the state array (immutable update)
    setPeople((prevPeople) => [
      ...prevPeople,
      { id: prevPeople.length + 1, firstName, lastName }
    ]);

    // Clear inputs by resetting state
    setFirstName("");
    setLastName("");
  };

  return (
    <>
      <h1>State using Functional Component</h1>

      <h3>The current value of isTrue is {isTrue ? "True" : "False"}</h3>

      <button onClick={handleToggle}>Toggle isTrue</button>

      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <h3>First Name</h3>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <br />
        <h3>Last Name</h3>
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>

      <div>
        <h2>Your First Name is: {firstName}</h2>
        <h2>Your Last Name is: {lastName}</h2>
      </div>

      <div>
        <h2>List of People</h2>
        <ol>
          {people.map((p) => (
            <li key={p.id}>
              {p.firstName} {p.lastName}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default App;
