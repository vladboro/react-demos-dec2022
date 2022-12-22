import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import UserForm from "./components/UserForm"
import { LanguageContext } from "./LanguageContext"

const App = () => {
  const [language, setLanguage] = useState("en")
  return (
    <LanguageContext.Provider value={language}>
      <div className="ui container">
        <i className="us flag" onClick={()=>setLanguage("en")}></i>
        <i className="ru flag" onClick={()=>setLanguage("ru")}></i>
        <UserForm/>
      </div>
    </LanguageContext.Provider>
  )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
