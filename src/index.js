import React from "react";
import ReactDOM from "react-dom/client";
import useNumberField from "./hooks/useNumerField";

const App = () => {
  const [value, numberField] = useNumberField(10, 100);
  return (
    <div>
      {numberField}
      <div>{value}</div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
