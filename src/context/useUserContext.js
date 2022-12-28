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
                alert('logado com sucesso')
            }
        } catch (e) {
            alert(e)
        }
        
    }

    return (
        <UserContext.Provider value={{user, login}}>
            {children}
        </UserContext.Provider>
    )
}

const useUserContext = () => {
    const context = useContext(UserContext)
    return context
}

export {useUserContext, UserProvider}