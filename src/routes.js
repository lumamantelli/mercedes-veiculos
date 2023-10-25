import Home from "./pages/Home";

const { BrowserRouter, Routes, Route } = require("react-router-dom");

function AppRoutes() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes