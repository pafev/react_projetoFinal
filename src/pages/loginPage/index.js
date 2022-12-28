import { Container } from "./styles"
import { Link, useNavigate } from "react-router-dom"
import { FaUsers } from 'react-icons/fa'
import { useState } from "react"
import { useUserContext } from "../../context/useUserContext"

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
                    <div className="inputContent">
                        <span>E-mail</span>
                        <input className="inputEmail" placeholder="Seu e-mail"
                         onChange={(event) => setEmail(event.target.value)}></input>
                    </div>
                    <div className="inputContent">
                        <span>Senha</span>
                        <input className="inputSenha" placeholder="Sua senha" type="password"
                         onChange={(event) => setPassword(event.target.value)}></input>
                    </div>      
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