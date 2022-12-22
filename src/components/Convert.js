import axios from "axios";
import React, { useEffect, useState } from "react";

const Convert = ({ text, language }) => {
  const [translated, setTranslated] = useState("");
  const [textToTranslate, setTextToTranslate] = useState(text);

  useEffect(() => {
    //delay
    const timerId = setTimeout(() => {
      setTextToTranslate(text);
    }, 500);
    console.log("timer", timerId);
    return () => {
      console.log("clear timer", timerId);
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      console.log("do tranlation", textToTranslate);
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: textToTranslate,
            target: language,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };
    doTranslation();
  }, [language, textToTranslate]);

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
