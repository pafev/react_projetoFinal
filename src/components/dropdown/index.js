import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { Container } from "./styles"
import { BsChevronDoubleDown } from 'react-icons/bs'

const Dropdown = ({name, array}) => {
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
                    {name} <BsChevronDoubleDown id="iconDown"/>
                </p>
            </button>
            <div className="dropdown-content" id={openDropdown? 'contentShow' : ''}>
                {array.map((object, index) => (
                    <Link className="item" to='/' key={index}>{object.name}</Link>
                ))}
            </div>
        </div>
        </Container>
    )
}

export default Dropdown