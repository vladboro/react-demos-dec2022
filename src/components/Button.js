import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

class Button extends React.Component {
  render() {
    const language = this.context
    return <button>{language === "en" ? "Save" : "Сохранить"}</button>;
  }
}
Button.contextType = LanguageContext

export default Button;
