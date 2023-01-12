import { Container } from "./styles"
import { BiSearchAlt } from 'react-icons/bi'
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import AdminProductCard from "../adminProductCard"
import { api } from "../../services/api"

const EditProductsSession = () => {
    const [products, setProducts] = useState([])

    // para filtrar o array pelo text
    const [text, setText] = useState('')
    const searchedArray = useMemo(() => {
        const lowerText = text.toLowerCase()
        return products.filter((item) => item.name.toLowerCase().includes(lowerText))
    }, [text, products])

    // para otimizar a busca na barra de pesquisa
    const timeoutRef = useRef(null)
    const delaySearch = 500 // (dada em ms)

    // Para exibir corretamente as marcas mesmo ao alternar de session
    const getProducts = useCallback(() => {
        api.get('products/index').then(response => setProducts(response.data))
    },[])

    useEffect(() => {
        getProducts()
    },[getProducts])

    return (
        <Container>
            <div className="searchContent">
                <input placeholder='Pesquise o produto' 
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
                <ul>
                    {searchedArray.length > 0 ? 
                    searchedArray.map((item) => (
                        <AdminProductCard item={item} products={products} setProducts={setProducts}
                         getProducts={getProducts}/>
                    )) : 
                    <li>Produto não encontrado...</li>}
                </ul>
            </div>
        </Container>
    )
}

export default EditProductsSession