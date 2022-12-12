import AppRoutes from "./AppRoutes";
// import { useLocation } from "react-router-dom";

import SideBar from "./components/modules/general-modules/SideBar";
import NavBar from "./components/modules/general-modules/NavBar";


function App() {
  // const location = useLocation().pathname;
  // const currentPath = location.split("/")[1];

  return (
    <div className="App bg-black overflow-auto text-white">
    
      <SideBar />
      <NavBar />

      <AppRoutes />
    </div>
  );
}

export default App;
