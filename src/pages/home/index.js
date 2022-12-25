import { Container } from "./styles"
import Dropdown from "../../components/dropdown"
import { useEffect, useState } from "react"
import { api } from "../../services/api"
import DropdownPrice from "../../components/dropdownPrice"

const Home = () => {   
    
    const [categories, setCategories] = useState([])
    const [brands, setBrands] = useState([])

    useEffect( () => {
        api.get('/categories/index').then(response => {
            setCategories(response.data)
        })

        api.get('/brands/index').then(response => {
            setBrands(response.data)
        })
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
                <div className="filters">
                    <Dropdown name={'Categoria'} array={categories}/>
                    <DropdownPrice />
                    <Dropdown name={'Marca'} array={brands}/>
                </div>
                <div className="products">
                    <p>
                        Aqui ficam os produtos
                    </p>
                </div>
            </section>
        </Container>
    )
}

export default Home