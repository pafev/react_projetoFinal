import { Container } from "./styles"
import { useEffect, useState } from "react"
import { api } from "../../services/api"
import Dropdown from "../../components/dropdown"
import DropdownPrice from "../../components/dropdownPrice"
import SearchInput from "../../components/searchInput"

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

    return (
        <Container>
        <link href="https://fonts.cdnfonts.com/css/jomolhari" rel="stylesheet"></link>
            <div className="welcome">
                <div><h1>
                    Bem vindo ao Ecommerce
                </h1></div>
            </div>
            <section className="exhibition">
                <SearchInput array={products}/>
                <div className="products">
                    <div className="filters">
                        <Dropdown name={'Categoria'} array={categories}/>
                        <DropdownPrice />
                    </div>
                    <div className="productsContent">
                        <ul>
                            {products && products.map((product) => (
                                <li key={product.id}>{product.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default Home