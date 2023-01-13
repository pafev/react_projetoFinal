import { Container } from "./styles"
import { BiSearchAlt } from 'react-icons/bi'
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import AdminProductCard from "../adminProductCard"
import { api } from "../../services/api"
import {AiOutlinePlus} from 'react-icons/ai'

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

    const addProducts = async (nameNew, priceNew, brandNew, categoryNew, stockQuantityNew) => {
        try{
            const response = await api.post('/products/create', {product: 
                {name: nameNew,
                 price: priceNew,
                 brand_id: brandNew,
                 category_id: categoryNew,
                 stock_quantity: stockQuantityNew,
                }
            })
            if(response.data){
                setProducts([...products, response.data])
                alert('Produto criado com sucesso')
            }
        } catch(e){
            alert(e)
        }
    }

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
                <button className="addItem" onClick={() => {
                    addProducts(
                        prompt('Digite o nome do novo produto:'),
                        parseInt(parseFloat(prompt('Digite o preço do novo produto:'))*100),
                        parseInt(prompt('Digite o id da marca do novo produto:')),
                        parseInt(prompt('Digite o id da categoria do novo produto:')),
                        parseInt(prompt('Digite a quantidade em estoque do novo produto:'))
                    )
                }}> <AiOutlinePlus className="iconAdd"/> Adicionar Produto</button>
                <ul>
                    {searchedArray.length > 0 ? 
                    searchedArray.map((item) => (
                        <AdminProductCard key={item.id} item={item} products={products} 
                        setProducts={setProducts} getProducts={getProducts} id="productCard"/>
                    )) : 
                    <></>}
                </ul>
            </div>
        </Container>
    )
}

export default EditProductsSession