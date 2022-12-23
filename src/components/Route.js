import RouteContext from "./RouteContext";

const Route = ({ path, children }) => {
  let location = window.location.pathname;
  if (path === "/") return location === "/" ? children : null;
  if (location.startsWith(path))
    if (location.length > path.length) {
      const param = location.substring(path.length + 1);
      return (
        <RouteContext.Provider value={param}>{children}</RouteContext.Provider>
      );
    } else return children;
  else return null;
};

export default Route;
