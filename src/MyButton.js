import React, { useState } from "react";

const MyButton = (props) => {
  console.log("render");
  const [counter, setCounter] = useState(0);
  const [updateTime, setUpdateTime] = useState(new Date());
  console.log("useState:", counter);
  return (
    <button
      type="button"
      style={{ color: props.color }}
      onClick={(e) => {
        console.log("click");
        setCounter(counter + 1);
        setUpdateTime(new Date());
      }}
    >
      {props.text}: {counter} - updated at {updateTime.toLocaleTimeString()}
    </button>
  );
};

export default MyButton;
