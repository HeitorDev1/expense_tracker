import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "../pages/Login/Login.jsx"
import Register from "../Register/Register.jsx"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes