import {Route, Routes} from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import IDCARD from "./components/IDCARD"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Sys from "./pages/Sys"
function App (){
  return <Routes>
            <Route path="/header" element={<Header />} />
            <Route path="/about" element={<About />} />
            <Route path="/id" element={<IDCARD />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sys" element={<Sys />} />
            <Route path="/" element={<Home />} />

           

</Routes>
}


export default App