import { useEffect, useRef, useState } from "react"
import { Container } from "./styles"
import { BsChevronDoubleDown } from 'react-icons/bs'
import { GiConfirmed } from 'react-icons/gi'

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

            <button className="dropdownBtn" 
             onClick={() => setOpenDropdown(!openDropdown)}
             id={openDropdown? 'buttonShow' : ''}
            >
                <p>
                    Preço <BsChevronDoubleDown id="iconDown"/>
                </p>
            </button>

            <div className="dropdown-content" id={openDropdown? 'contentShow' : ''}>
                <div className="inputPrice">
                    <input className="item" placeholder="R$ min"
                    onChange={(event) => {
                        if(event.target.value) {
                            setPriceMinInput(parseFloat(event.target.value) * 100)
                        } else {
                            setPriceMinInput(0)
                        }
                    }}
                    ></input>
                    <input className="item" placeholder="R$ max"
                    onChange={(event) => {
                        if(event.target.value) {
                            setPriceMaxInput(parseFloat(event.target.value) * 100)
                        } else {
                            setPriceMaxInput(Infinity)
                        }
                    }}
                    ></input>                    
                </div>

                <div className="applyPrice">
                    <button onClick={() => {
                        setFilterPriceMax(priceMaxInput)
                        setFilterPriceMin(priceMinInput)
                    }}>
                        <span>Aplicar <GiConfirmed id="iconConfirm"/></span>
                    </button>
                </div>
                
            </div>
        </div>
        </Container>
    )
}

export default DropdownPrice