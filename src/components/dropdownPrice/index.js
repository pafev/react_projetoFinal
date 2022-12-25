import { useEffect, useRef, useState } from "react"
import downIcon from '../../assets/down white icon.png'
import { Link } from "react-router-dom"
import { Container } from "./styles"

const DropdownPrice = () => {
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
                    Preço <img src={downIcon} alt='seta'></img>
                </p>
            </button>
            <div className="dropdown-content" id={openDropdown? 'contentShow' : ''}>
                <Link className="item" to='/'> {'< R$100,00'} </Link>
                <Link className="item" to='/'> {'> R$100,00'} </Link>
                <Link className="item" to='/'> {'> R$200,00'} </Link>
                <Link className="item" to='/'> {'> R$300,00'} </Link>
            </div>
        </div>
        </Container>
    )
}

export default DropdownPrice