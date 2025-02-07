import { useState } from "react";
import "./App.css";

function App() {
  const [Fname, setfname] = useState("");
  const [Lname, setlname] = useState("");
  const [showText, setShowText] = useState(false);
  let flag = false;

  const setText = (event) => {
    event.preventDefault();
    if (!Fname || !Lname) {
      setError;
    }
    setShowText(true);
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={setText}>
        <label htmlFor="FName">First Name:</label>
        <input
          id="Name"
          type="text"
          onChange={(e) => {
            setfname(e.target.value);
          }}
          required
        ></input>
        <br />
        <label htmlFor="LName">Last Name:</label>
        <input
          id="LName"
          type="text"
          onChange={(e) => {
            setlname(e.target.value);
          }}
          required
        ></input>
        <br />
        <button type="submit">Submit</button>
      </form>
      {showText && (
        <div>
          <p>
            Full Name:{Fname} {Lname}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
