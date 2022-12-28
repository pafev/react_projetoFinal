import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { Container } from "./styles"
import iconPerfil from '../../assets/perfil-icon-white.png'
import { BiEdit } from 'react-icons/bi'
import { FiLogOut } from 'react-icons/fi'
import { useUserContext } from "../../context/useUserContext"

const DropdownPerfil = () => {
    let contentRef = useRef()
    const [openDropdown, setOpenDropdown] = useState(false)

    useEffect( () => {
        let handler = (event) => {
            if(!contentRef.current.contains(event.target)){
                setOpenDropdown(false)
            }
        }
        document.addEventListener('mousedown', handler)
    },[])

    const {user} = useUserContext()

    return(
        <Container>
        <div className="dropdown" ref={contentRef}>
            <button className="dropdownBtn" onClick={() => setOpenDropdown(!openDropdown)}>
                <img src={iconPerfil} alt='perfil'></img>
            </button>
            <div className="dropdown-content" id={openDropdown? 'contentShow' : ''}>
                {user?
                 <>
                    <h1>
                        {user? user.name : "Usuário não logado"}
                    </h1>
                    <h2>
                        {user? `R$ ${(parseFloat(user.credit_wallet) / 100).toFixed(2)}` : "" }
                    </h2>
                    <Link className="item" to='/perfil'>
                        Editar perfil
                        <BiEdit className="icon"/>
                    </Link>
                    <Link className="item" to='/'>
                        Admin
                    </Link>
                    <Link className="item" to='/'>
                        Logout
                        <FiLogOut className="icon logout"/>
                    </Link>
                 </> :
                <h1>Usuário não logado</h1>
                }
            </div>
        </div>
        </Container>
    )
}

export default DropdownPerfil