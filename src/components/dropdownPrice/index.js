import { useEffect, useRef, useState } from "react"
import { Container } from "./styles"
import { BsChevronDoubleDown } from 'react-icons/bs'

const DropdownPrice = ({ setFilterPriceMin, setFilterPriceMax }) => {

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

    // para o botão de setar preço min e preço max
    const [priceMinInput, setPriceMinInput] = useState(0)
    const [priceMaxInput, setPriceMaxInput] = useState(Infinity)

    return(
        <Container>
        <div className="dropdown" ref={contentRef}>

            <button className="dropdownBtn" onClick={() => setOpenDropdown(!openDropdown)}>
                <p>
                    Preço <BsChevronDoubleDown id="iconDown"/>
                </p>
            </button>

            <div className="dropdown-content" id={openDropdown? 'contentShow' : ''}>
                <input className="item" placeholder="preço min"
                 onChange={(event) => {
                    if(event.target.value) {
                        setPriceMinInput(event.target.value * 100)
                    } else {
                        setPriceMinInput(0)
                    }
                 }}
                ></input>
                <button onClick={() => setFilterPriceMin(priceMinInput)}>
                    preço min
                </button>
                
                <input className="item" placeholder="preço max"
                 onChange={(event) => {
                    if(event.target.value) {
                        setPriceMaxInput(event.target.value * 100)
                    } else {
                        setPriceMaxInput(Infinity)
                    }
                 }}
                ></input>
                <button onClick={() => setFilterPriceMax(priceMaxInput)}>
                    preço max
                </button>
            </div>
        </div>
        </Container>
    )
}

export default DropdownPrice