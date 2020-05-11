import React, { useState } from "react";
import "./App.css";
import Avatarlist from "./Avatarlist";

const App = (props) => {
  const [isClick, setIsClick] = useState(false);
  const [name1, setName1] = useState("Sanket");
  const [name2, setName2] = useState("Ankit");
  const [name3, setName3] = useState("Sachin");
  const [name4, setName4] = useState("Kuldeep");

  const [iname1, setiName1] = useState("Sanket");
  const [iname2, setiName2] = useState("Ankit");
  const [iname3, setiName3] = useState("Sachin");
  const [iname4, setiName4] = useState("Kuldeep");
  const handleclick = () => {
    console.log("here");
    setIsClick(true);
    setiName1(name1);
    setiName2(name2);
    setiName3(name3);
    setiName4(name4);
  };
  return (
    <div className="Header">
      <h1> Welcome to Avatar World</h1>
      <Avatarlist
        name={name1}
        setName={setName1}
        index={1}
        val={iname1}
        isClick={isClick}
        work="Web devloper"
      />
      <Avatarlist
        name={name2}
        setName={setName2}
        index={2}
        val={iname2}
        isClick={isClick}
        work="Frontend devloper"
      />
      <Avatarlist
        name={name3}
        index={3}
        setName={setName3}
        val={iname3}
        isClick={isClick}
        work="Backend devloper"
      />
      <Avatarlist
        name={name4}
        index={4}
        val={iname4}
        setName={setName4}
        isClick={isClick}
        work="Mechanical"
      />
      <br />
      <button onClick={handleclick}>Click me</button>
    </div>
  );
};

export default App;
