import { useState } from "react"
import { Container } from "./styles"
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

const UserInputPassword = ({title, placeholder, setData}) => {

    const [showPassword, setShowPassword] = useState(false)

    return (
        <Container>
            <div className="inputContent">
                <span>{title}</span>
                <div className="input">
                    <input placeholder={placeholder}
                        onChange={(event) => setData(event.target.value)}
                        type={showPassword? "text" : "password"}>
                    </input>
                    {showPassword? 
                    <AiFillEye className="icon" onClick={() => setShowPassword(!showPassword)}/> : 
                    <AiFillEyeInvisible className="icon" onClick={() => setShowPassword(!showPassword)}/>}
                </div>
            </div>
        </Container>
    )   
}

export default UserInputPassword