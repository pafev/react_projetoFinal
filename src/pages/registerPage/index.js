import { Container } from "./styles"
import { Link, useNavigate } from "react-router-dom"
import { FaUsers } from 'react-icons/fa'
import { useState, useRef, useEffect } from "react"
import { useUserContext } from "../../context/useUserContext"
import UserInput from "../../components/userInput"
import UserInputValidate from "../../components/userInputValidate"
import UserInputPassword from "../../components/userInputPassword"

const RegisterPage = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [validPassword, setValidPassword] = useState(false)

    const {register} = useUserContext()

    const navigate = useNavigate()

    const buttonRef = useRef()

    // para o botão Entrar funcionar com a tecla Enter do teclado
    useEffect(() => {
        const handler = (event) => {
            if(event.key === "Enter") {
                console.log('apertou o enter')
                buttonRef.current.click()
            }
        }
        document.addEventListener('keypress', handler)
    }, [])

    return (
        <Container>
            <form className="content" onSubmit={() => {
                        if (validPassword) {
                            register(email, password, name)
                            navigate("/entrar")
                        } else {
                            alert("Repita a senha novamente")
                        }
                    }}>
                <FaUsers className="icon" />
                <div className="inputData">
                    <UserInput title={"E-mail"} placeholder={"Seu e-mail"} 
                               setData={setEmail} />
                    <UserInput title={"Nome de usuário"} placeholder={"Seu nome de usuário"} 
                               setData={setName} />
                    <UserInputPassword title={"Senha"} placeholder={"Sua senha"}
                                       setData={setPassword} />
                    <UserInputValidate title={"Repitir a senha"} placeholder={"Repita a senha"}
                                       setData={setValidPassword} valueToCompare={password}/>         
                </div>
                <div className="buttons">
                    <button type="submit" ref={buttonRef}>
                        Registrar
                    </button>
                    <Link to="/entrar" className="alternative">Já sou cliente</Link>
                </div>
            </form>
        </Container>
    )
}

export default RegisterPage