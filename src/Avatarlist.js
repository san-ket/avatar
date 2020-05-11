import React, { useState } from "react";
import "./Avatarlist.css";

const Avatarlist = (props) => {
  const [value, setValue] = useState(props.name);
  const handleChange = (e) => {
    console.log(e.target.value);
    props.setName(e.target.value);
  };
  return (
    <div className="Avatar">
      <img src={`http://joeschmoe.io/api/v1/${props.val}`} alt="Avatar" />
      <h4>
        {" "}
        {!props.isClick ? (
          <input type="text" onBlur={handleChange} placeholder="Enter Name" />
        ) : (
          <div>{props.val}</div>
        )}
      </h4>
      <p> {props.work} </p>
    </div>
  );
};

export default Avatarlist;
