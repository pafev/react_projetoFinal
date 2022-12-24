import { useEffect, useRef, useState } from "react"
import downIcon from '../../assets/down white icon.png'
import { Link } from "react-router-dom"
import { Container } from "./styles"

const Dropdown = ({name}) => {
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
                    {name} <img src={downIcon} alt='seta'></img>
                </p>
            </button>
            <div className="dropdown-content" id={openDropdown? 'contentShow' : ''}>
                <Link className="item" to='/'>Item 1</Link>
                <Link className="item" to='/'>Item 2</Link>
                <Link className="item" to='/'>Item 3</Link>
            </div>
        </div>
        </Container>
    )
}

export default Dropdown