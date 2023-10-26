import Contato from "pages/Contato";
import Home from "./pages/Home";

const { BrowserRouter, Routes, Route } = require("react-router-dom");

function AppRoutes() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Contato" element={<Contato/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes