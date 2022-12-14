import AppRoutes from "./AppRoutes";
import { useLocation } from "react-router-dom";

import SideBar from "./components/modules/general-modules/SideBar";
import NavBar from "./components/modules/general-modules/NavBar";


function App() {
  const location = useLocation().pathname;
  // console.log(location)
  const currentPath = location.split("/")[1];
  // console.log(currentPath)

  return (
    <div className="App bg-black overflow-auto text-white">
    
      {currentPath !== 'signup' && <SideBar currentPath={currentPath}/>}
      {currentPath !== 'signup' && <NavBar currentPath={currentPath}/>}

      <AppRoutes />
    </div>
  );
}

export default App;
