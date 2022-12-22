import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

const Button = () => {
  const language = useContext(LanguageContext);
  return <button>{language === "en" ? "Save" : "Сохранить"}</button>;
};

export default Button;
