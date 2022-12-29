import { Container } from "./styles"
import { Link, useNavigate } from "react-router-dom"
import { FaUsers } from 'react-icons/fa'
import { useState } from "react"
import { useUserContext } from "../../context/useUserContext"
import UserInput from "../../components/userInput"
import UserInputPassword from "../../components/userInputPassword"

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {login} = useUserContext()

    const navigate = useNavigate()

    return (
        <Container>
            <div className="content">
                <FaUsers className="icon" />
                <div className="inputData">
                    <UserInput title={"E-mail"} placeholder={"Seu e-mail"} 
                               setData={setEmail} />
                    <UserInputPassword title={"Senha"} placeholder={"Sua senha"}
                               setData={setPassword} />     
                </div>
                <div className="buttons">
                    <button className="enter" onClick={() => {
                        login(email, password)
                        navigate(-1)
                    }}>
                        Entrar
                    </button>
                    <Link to="/registrar" className="register">Ainda não sou cliente</Link>
                </div>
            </div>
        </Container>
    )
}

export default LoginPage