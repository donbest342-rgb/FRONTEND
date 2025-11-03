import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home.jsx"
import Login from "./Pages/Login.jsx" 
import Registration from "./Pages/Registration.jsx"
import Users from "./Pages/Users.jsx"
// import Nav from "./Component/Nav.jsx"
import About from "./Pages/About.jsx"
import Dash from "./Pages/Dash.jsx"



const App = () => {
  return (
    <div>
      {/* <Nav/> */}
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Registration />}/>
        <Route path="/users" element={<Users />}/>
        <Route path="/dash"  element={<Dash/>}/>
      </Routes>
      
    </div>
  )
}

export default App
