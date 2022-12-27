import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { Container } from "./styles"
import { BsChevronDoubleDown } from 'react-icons/bs'

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
                    Preço <BsChevronDoubleDown id="iconDown"/>
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