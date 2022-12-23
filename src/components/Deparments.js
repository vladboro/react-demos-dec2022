import React, { useContext } from "react";
import RouteContext from "./RouteContext";

const Departments = () => {
  const param = useContext(RouteContext);
  return (
    <React.Fragment>
      <h1>Departments</h1>
      <h2>{param || "List of departments"}</h2>
    </React.Fragment>
  );
};

export default Departments;
