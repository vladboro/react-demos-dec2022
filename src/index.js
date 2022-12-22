import React from "react";
import ReactDOM from "react-dom/client";
import MyButton from "./MyButton";

const App = () => (
  <div>
    <MyButton text="First" color="red"/>
    <MyButton text="Second" color="green"/>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
);
