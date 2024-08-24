import Login from "./routes/Login"
import Profile from "./routes/Profile"
import { Route, Routes } from "react-router-dom"


function App() {



  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="profile" element={<Profile/>} />
      </Routes>
    </>
  )
}

export default App
