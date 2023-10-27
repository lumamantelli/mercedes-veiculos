import Contato from "pages/Contato";
import "index.css"
import Home from "pages/Home";
import Veiculo from "pages/Veiculo";


const { BrowserRouter, Routes, Route } = require("react-router-dom");

function AppRoutes() {
  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="Contato" element={<Contato/>}/>
        <Route path=":id" element={<Veiculo/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes