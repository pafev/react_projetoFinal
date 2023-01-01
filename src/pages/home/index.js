import { Container } from "./styles"
import { useEffect, useState } from "react"
import { api } from "../../services/api"
import SearchInput from "../../components/searchInput"
import FiltersContent from "../../components/filtersContent"

const Home = () => {   

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
                    <FiltersContent className="filters"/>
                </div>
            </section>
        </Container>
    )
}

export default Home