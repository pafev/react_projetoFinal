import { Container } from "./styles"
import { Link } from "react-router-dom"
import { FaUsers } from 'react-icons/fa'

const LoginPage = () => {
    return (
        <Container>
            <div className="content">
                <FaUsers className="icon" />
                <div className="inputData">
                    <div className="inputContent">
                        <span>E-mail</span>
                        <input className="inputEmail" placeholder="Seu e-mail"></input>
                    </div>
                    <div className="inputContent">
                        <span>Senha</span>
                        <input className="inputSenha" placeholder="Sua senha"></input>
                    </div>      
                </div>
                <div className="buttons">
                    <button className="enter">Entrar</button>
                    <Link to="/registrar" className="register">Ainda não sou cliente</Link>
                </div>
            </div>
        </Container>
    )
}

export default LoginPage