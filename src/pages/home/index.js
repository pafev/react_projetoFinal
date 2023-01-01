import { Container } from "./styles"
import Dropdown from "../../components/dropdown"
import { useEffect, useMemo, useRef, useState } from "react"
import { api } from "../../services/api"
import DropdownPrice from "../../components/dropdownPrice"
import { BiSearchAlt } from 'react-icons/bi'
import productCard from "../../components/productCard"

const Home = () => {   
    
    // para renderizar as opções de categorias no filtro
    const [categories, setCategories] = useState([])
    useEffect( () => {
        api.get('/categories/index').then(response => setCategories(response.data))
    },[])

    // para puxar os produtos da api
    const [products, setProducts] = useState([])
    useEffect(() => {
        api.get('/products/index').then(response => setProducts(response.data))
    },[])

    // para deixar a barra de pesquisa funcional
    const [text, setText] = useState('')
    const searchedProducts = useMemo(() => {
        const lowerText = text.toLowerCase()
        return products.filter((product) => product.name.toLowerCase().includes(lowerText))
    }, [text, products])
    
    // para otimizar a busca na barra de pesquisa
    const timeoutRef = useRef(null)
    const delaySearch = 500 // (dada em ms)

    return (
        <Container>
        <link href="https://fonts.cdnfonts.com/css/jomolhari" rel="stylesheet"></link>
            <div className="welcome">
                <div><h1>
                    Bem vindo ao Ecommerce
                </h1></div>
            </div>
            <section className="exhibition">
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
                <div className="products">
                    <div className="filters">
                        <Dropdown name={'Categoria'} array={categories}/>
                        <DropdownPrice />
                    </div>
                    <div className="productsContent">
                        <ul>
                            {searchedProducts && searchedProducts.map((product) => (
                                <li key={product.id}>{product.name}</li>
                            ))}
                        </ul>
                        <productCard/>
                    </div>

                </div>
            </section>
        </Container>
    )
}

export default Home