import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

const NameInput = () => {
  const language = useContext(LanguageContext);
  return (
    <div className="ui form">
      <label>{language === "en" ? "Enter Name" : "Введите имя"}</label>
      <input className="field" type="text" />
    </div>
  );
};

export default NameInput