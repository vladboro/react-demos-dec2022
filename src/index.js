import React, { useEffect, useMemo, useState } from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  const [count, setCount] = useState(0);

  const getCBR = (minute) => {
    console.log("getCBR start");
    for (let i = 0; i < 100000; i++) {
      for (let j = 0; j < 100000; j++) {
        const element = 100000;
      }
    }
    console.log("getCBR end");
    return `Rate for ${minute}: 67.89`;
  };
  let minute = new Date().getMinutes().toString();
  let rate = useMemo(() => getCBR(minute), [minute]);

  return (
    <div>
      <button type="button" onClick={() => setCount(count + 1)}>
        {count}
      </button>
      <h1>{rate}</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
