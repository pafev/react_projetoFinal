import { Container } from "./styles"
import { Link, useNavigate } from "react-router-dom"
import { FaUsers } from 'react-icons/fa'
import { useState } from "react"
import { useUserContext } from "../../context/useUserContext"

const RegisterPage = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [validPassword, setValidPassword] = useState(false)

    const {register} = useUserContext()

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
                        <span>Nome de usuário</span>
                        <input className="inputName" placeholder="Seu nome de usuário"
                         onChange={(event) => setName(event.target.value)}></input>
                    </div>
                    <div className="inputContent">
                        <span>Senha</span>
                        <input className="inputSenha" placeholder="Crie uma senha" type="password"
                         onChange={(event) => setPassword(event.target.value)}></input>
                    </div>
                    <div className="inputContent">
                        <span> Repitir senha</span>
                        <input className="inputSenha" placeholder="Repita a senha" type="password"
                         onChange={(event) => password === event.target.value?
                                              setValidPassword(true) : 
                                              setValidPassword(false)}>
                        </input>
                    </div>          
                </div>
                <div className="buttons">
                    <button className="enter" onClick={() => {
                        if (validPassword) {
                            register(email, password, name)
                            navigate(-1)
                        } else {
                            alert("Repita a senha novamente")
                        }
                    }}>
                        Registrar
                    </button>
                    <Link to="/entrar" className="register">Já sou cliente</Link>
                </div>
            </div>
        </Container>
    )
}

export default RegisterPage