import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Departments from "./components/Deparments";
import Link from "./components/Link";
import Route from "./components/Route";


const App = () => {
  const [location, setLocation] = useState("/")
  return (<div className="ui container">
    <h1>Header</h1>
    <div>breadcrumbs: {location}</div>
    <Link href="/" className="ui link" text="Home" onClick={setLocation}/>
    <Link href="/departments" className="ui link" text="Departments" onClick={setLocation}/>
    <Link href="/departments/Sales" className="ui link" text="Sales" onClick={setLocation}/>
    <Link href="/departments/Marketing" className="ui link" text="Marketing" onClick={setLocation}/>
    <Link href="/about" className="ui link" text="About" onClick={setLocation}/>
    <Link href="/contacts" className="ui link" text="Contacts" onClick={setLocation}/>
    <div className="ui container">
      <Route path="/">
        <h1>This is home page</h1>
      </Route>
      <Route path="/departments">
        <Departments/>
      </Route>
      <Route path="/about">
        <h1>This is about page</h1>
      </Route>
      <Route path="/contacts">
        <h1>This is contacts page</h1>
      </Route>
    </div>
  </div>)
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
