import { createContext, useContext, useState } from "react";
import { api } from "../services/api";

const UserContext = createContext({})

const UserProvider = ({children}) => {

    const [user, setUser] = useState(undefined)

    const login = async (email, password) => {
        try {
            const response = await api.get('/users/login', {params: {email, password}})
            if (response.data) {
                setUser(response.data)
                alert('usuário logado com sucesso')
            }
        } catch (e) {
            alert(e)
        }   
    }
    
    const register = async (email, password, name) => {
        try {
            const response = await api.post('/users/create', {user: {email, password, name}})
            console.log(response.data)
            if (response.data) {
                alert('usuário registrado com sucesso')
            }
        } catch (e) {
            alert(e)
        }
    }

    const logout = () => {
        setUser(undefined)
    }

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