import { Outlet } from "react-router-dom";
import HeaderComponent from "./components/header/HeaderComponent";

const App = () => {
  return (
    <>
      <HeaderComponent />
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default App;
