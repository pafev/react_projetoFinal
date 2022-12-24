import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { Container } from "./styles"
import iconPerfil from '../../assets/perfil-icon-white.png'

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

    return(
        <Container>
        <div className="dropdown" ref={contentRef}>
            <button className="dropdownBtn" onClick={() => setOpenDropdown(!openDropdown)}>
                <p>
                    <img src={iconPerfil} alt='perfil'></img>
                </p>
            </button>
            <div className="dropdown-content" id={openDropdown? 'contentShow' : ''}>
                <h1>Nome do usuário</h1>
                <Link className="item" to='/perfil'>Editar perfil</Link>
                <Link className="item" to='/'>Logout</Link>
                <Link className="item" to='/'>Admin</Link>
            </div>
        </div>
        </Container>
    )
}

export default DropdownPerfil