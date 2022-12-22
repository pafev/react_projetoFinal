import { Route, Routes } from "react-router-dom"
import AboutUs from "../pages/aboutUs"
import CartPage from "../pages/cartPage"
import Home from "../pages/home"
import LoginPage from "../pages/loginPage"
import PerfilPage from "../pages/perfilPage"
import RegisterPage from "../pages/registerPage"

const MyRoutes = () => {
    return (
        <Routes>
            <Route path='*' element={<Home />}/>
            <Route path='/carrinho' element={<CartPage/>}/>
            <Route path='/perfil' element={<PerfilPage/>}/>
            <Route path='/entrar' element={<LoginPage/>}/>
            <Route path='/registrar' element={<RegisterPage/>}/>
            <Route path='/sobre' element={<AboutUs/>}/>
        </Routes>
    )
}

export default MyRoutes