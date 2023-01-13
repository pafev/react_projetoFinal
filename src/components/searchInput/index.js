import { Container } from "./styles"
import { BiSearchAlt } from 'react-icons/bi'
import { useMemo, useRef, useState, useEffect } from "react"

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

    // para fechar a barra ao clicar fora dela
    const contentRef = useRef()
    const [openContent, setOpenContent] = useState(false)
    useEffect( () => {
        const handler = (event) => {
            if(contentRef.current && !contentRef.current.contains(event.target)){
                setOpenContent(false)
            }
        }
        document.addEventListener('mousedown', handler)

        return () => document.removeEventListener('mousedown', handler)
    },[])

    return (
        <Container>
            <div className="searchContent" ref={contentRef}>
                <input placeholder='Pesquise seu produto' 
                    onChange={(event) => {
                    window.clearTimeout(timeoutRef.current)
                    timeoutRef.current = window.setTimeout(() => {
                        setText(event.target.value)
                    }, delaySearch)
                    }}
                    onFocus={() => setOpenContent(true)} 
                />
                <BiSearchAlt className="iconSearch"/>
            </div>
            <div className="searchedProducts">
                <ul className={text && searchedArray && openContent ? 'contentShow' : ''}>
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