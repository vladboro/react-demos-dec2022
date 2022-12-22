import React from "react";
import { LanguageContext } from "../LanguageContext";

class Button extends React.Component {
  render() {
    return (<LanguageContext.Consumer>
      {(language) => (
        <button>{language === "en" ? "Save" : "Сохранить"}</button>
      )}
    </LanguageContext.Consumer>);
  }
}

export default Button;
