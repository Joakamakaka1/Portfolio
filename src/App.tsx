import "./App.css";
import AppRoute from "./Route";
import { inject } from "@vercel/analytics";

const App = () => {
  return (
    <>
      {/* <CustomCursor /> */}
      <AppRoute />
    </>
  );
};

inject();
export default App;
