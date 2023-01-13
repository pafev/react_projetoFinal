import { Container } from "./styles"
import { Link, useNavigate } from "react-router-dom"
import { FaUsers } from 'react-icons/fa'
import { useRef, useEffect, useState } from "react"
import { useUserContext } from "../../context/useUserContext"
import UserInput from "../../components/userInput"
import UserInputPassword from "../../components/userInputPassword"

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {login, user} = useUserContext()

    const navigate = useNavigate()

    const buttonRef = useRef()

    //para o botão Entrar funcionar com a tecla Enter do teclado
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
            <form className="content" onSubmit={() => login(email, password) && 
                        user && navigate('/')}>
                <FaUsers className="icon" />
                <div className="inputData">
                    <UserInput title={"E-mail"} placeholder={"Seu e-mail"} 
                               setData={setEmail} />
                    <UserInputPassword title={"Senha"} placeholder={"Sua senha"}
                               setData={setPassword} />     
                </div>
                <div className="buttons">
                    <button className="enter" type="submit" ref={buttonRef}>
                        Entrar
                    </button>
                    <Link to="/registrar" className="register">Ainda não sou cliente</Link>
                </div>
            </form>
        </Container>
    )
}

export default LoginPage