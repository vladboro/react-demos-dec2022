import React, { useState } from "react";

const useNumberField = (min, max) => {
  const [value, setValue] = useState(min);

  const validate = (event) => {
    const newValue = Number(event.target.value);

    if (isNaN(newValue) || newValue < min || newValue > max) setValue(min);
    else setValue(newValue);
  };

  return [value, <input type="text" onChange={validate} />];
};

export default useNumberField;
