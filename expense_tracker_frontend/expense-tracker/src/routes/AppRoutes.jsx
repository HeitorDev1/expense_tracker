import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "../pages/Login/Login.jsx"
import Register from "../pages/Register/Register.jsx"
import Home from "../pages/Home/Home.jsx"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes