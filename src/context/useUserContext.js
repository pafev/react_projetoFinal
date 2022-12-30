import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import Cookies from "js-cookie";

const UserContext = createContext({})

const UserProvider = ({children}) => {

    const [user, setUser] = useState(undefined)

    const getUserData = () => {
        api.get('/users/show').then((response) => setUser(response.data))
    }

    const login = async (email, password) => {
        try {
            const response = await api.get('/users/login', {params: {email, password}})
            if (response.data) {
                api.defaults.headers.common['X-User-Email'] = response.data.email
                api.defaults.headers.common['X-User-Token'] = response.data.authentication_token
                getUserData()
                Cookies.set('ecommerce.user', JSON.stringify(response.data))
                alert('usuário logado com sucesso')
            }
        } catch (e) {
            alert(e)
        }   
    }
    
    const register = async (email, password, name) => {
        try {
            const response = await api.post('/users/create', {user: {email, password, name}})
            if (response.data) {
                alert('usuário registrado com sucesso')
            }
        } catch (e) {
            alert(e)
        }
    }

    const logout = () => {
        setUser(undefined)
        api.defaults.headers.common['X-User-Email'] = undefined
        api.defaults.headers.common['X-User-Token'] = undefined
        Cookies.remove('ecommerce.user')
    }

    useEffect(() => {
        const retrievedUser = Cookies.get('ecommerce.user')
        if (retrievedUser) {
            const tempUser = JSON.parse(retrievedUser)
            api.defaults.headers.common['X-User-Email'] = tempUser.email
            api.defaults.headers.common['X-User-Token'] = tempUser.authentication_token
            getUserData()
        }
    }, [])

    return (
        <UserContext.Provider value={{user, login, register, logout}}>
            {children}
        </UserContext.Provider>
    )
}

const useUserContext = () => {
    const context = useContext(UserContext)
    return context
}

export {useUserContext, UserProvider}