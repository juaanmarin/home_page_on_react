import { Route, Routes } from "react-router-dom";
import { AboutUS } from "./components/pages/AboutUS/AboutUS";
import { ContactUS } from "./components/pages/ContactUS/ContactUS";
import { Home } from "./components/pages/Home/Home";


import { Contador } from "./components/pages/Contador/Contador";


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/aboutUS" element={<AboutUS/>}></Route>
        <Route path="/contactUS" element={<ContactUS/>}></Route>
        <Route path="/Contador" element={<Contador/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
