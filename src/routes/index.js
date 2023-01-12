import { Route, Routes } from "react-router-dom"
import { useUserContext } from "../context/useUserContext"
import AboutUs from "../pages/aboutUs"
import AdminPage from "../pages/adminPage"
import CartPage from "../pages/cartPage"
import Home from "../pages/home"
import LoginPage from "../pages/loginPage"
import PerfilPage from "../pages/perfilPage"
import ProductPage from "../pages/productPage"
import RegisterPage from "../pages/registerPage"

const MyRoutes = () => {

    const {user} = useUserContext()

    return (
        <Routes>
            <Route path='*' element={<Home/>}/>
            <Route path='/carrinho' element={user? <CartPage/> : <LoginPage/>}/>
            <Route path='/perfil' element={user? <PerfilPage/> : <LoginPage/>}/>
            <Route path='/entrar' element={user? <Home/> : <LoginPage/>}/>
            <Route path='/registrar' element={user? <Home/> : <RegisterPage/>}/>
            <Route path='/sobre' element={<AboutUs/>}/>
            <Route path='/admin' element={<AdminPage/>}/>
            <Route path='/product/:id' element={<ProductPage/>}/>
        </Routes>
    )
}

export default MyRoutes