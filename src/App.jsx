import Cart from "./routes/Cart"
import Home from "./routes/Home"
import Login from "./routes/Login"
import Profile from "./routes/Profile"
import { Route, Routes } from "react-router-dom"


function App() {



  return (
    <>
      <Routes>
      <Route path="" element={<Home/>} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile/>} />
        <Route path="cart" element={<Cart/>}/>
      </Routes>
    </>
  )
}

export default App
