import * as React from "react";
import RootRoutes from "./routes/RootRoutes";
import "../styles/theme.css";
interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <>
      <RootRoutes />
    </>
  );
};

export default App;
