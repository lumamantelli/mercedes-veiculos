import Contato from "pages/Contato";
import "index.css"
import Home from "pages/Home";
import Veiculo from "pages/Veiculo";
import Adicionar from "pages/Adicionar";
import CodigoDc from "pages/CDC";
import Lgpd from "pages/LGPD";
import Cookies from "pages/Cookies";


const { BrowserRouter, Routes, Route } = require("react-router-dom");

function AppRoutes() {
  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="Contato" element={<Contato/>}/>
        <Route path=":id" element={<Veiculo/>}/>
        <Route path="Adicionar" element={<Adicionar/>}/>
        <Route path="Cdc" element={<CodigoDc/>}/>
        <Route path="LGPD" element={<Lgpd/>}/>
        <Route path="Cookies" element={<Cookies/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes