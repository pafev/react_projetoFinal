import { Container } from "./styles"
import { BiSearchAlt } from 'react-icons/bi'
import { useMemo, useRef, useState } from "react"

const SearchInput = ( {array} ) => {
    // para filtrar o array pelo text
    const [text, setText] = useState('')
    const searchedArray = useMemo(() => {
        const lowerText = text.toLowerCase()
        return array.filter((item) => item.name.toLowerCase().includes(lowerText))
    }, [text, array])

    // para otimizar a busca na barra de pesquisa
    const timeoutRef = useRef(null)
    const delaySearch = 500 // (dada em ms)

    return (
        <Container>
            <div className="searchContent">
                <input placeholder='Pesquise seu produto' 
                    onChange={(event) => {
                    window.clearTimeout(timeoutRef.current)
                    timeoutRef.current = window.setTimeout(() => {
                        setText(event.target.value)
                    }, delaySearch)
                    }} 
                />
                <BiSearchAlt className="iconSearch"/>
            </div>
            <div className="searchedProducts">
                <ul className={text && searchedArray ? 'contentShow' : ''}>
                    {text && searchedArray.length > 0 ? 
                    searchedArray.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    )) : 
                    <li>Produto não encontrado...</li>}
                </ul>
            </div>
        </Container>
    )
}

export default SearchInput