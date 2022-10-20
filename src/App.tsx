import { Route, Routes } from "react-router-dom"
import Login from "./pages/login/login"

export default function App() {
  return (
    <Routes>
      <Route path="/user/login" element={<Login />} />
    </Routes>
  )
}
