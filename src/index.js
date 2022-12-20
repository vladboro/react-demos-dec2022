import React from "react";
import ReactDOM from "react-dom/client";
import Comments from "./components/Comments";

const App = () => <Comments/>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
