import { useEffect, useRef, useState } from "react"
import { Container } from "./styles"
import { BsChevronDoubleDown } from 'react-icons/bs'

const Dropdown = ({name, array, setObjectId}) => {
    // para deixar o dropdown funcional
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

    // para deixar os botões do dropdown funcional

    return(
        <Container>
        <div className="dropdown" ref={contentRef}>
            <button className="dropdownBtn bouncy" 
             onClick={() => setOpenDropdown(!openDropdown)}
             id={openDropdown? 'buttonShow' : ''}
            >
                <p>
                    {name} <BsChevronDoubleDown id="iconDown"/>
                </p>
            </button>
            <div className="dropdown-content" id={openDropdown? 'contentShow' : ''}>
                {array.map((object, index) => (
                    <button className="item" onClick={() => setObjectId(object.id)} key={index}>
                        {object.name}
                    </button>
                ))}
            </div>
        </div>
        </Container>
    )
}

export default Dropdown