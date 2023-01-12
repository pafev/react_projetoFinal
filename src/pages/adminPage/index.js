import { useEffect, useState } from "react"
import EditBrandsSession from "../../components/editBrandsSession"
import EditCategoriesSession from "../../components/editCategoriesSession"
import EditProductsSession from "../../components/editProductsSession"
import { Container } from "./styles"
import { api } from "../../services/api"

const AdminPage = () => {

    const [session, setSession] = useState("Produtos")

    const [products, setProducts] = useState([])
    const [brands, setBrands] = useState([])
    const [categories, setCategories] = useState([])
    useEffect(() => {
        api.get('/products/index').then(response => setProducts(response.data))
        api.get('/brands/index').then(response => setBrands(response.data))
        api.get('/categories/index').then(response => setCategories(response.data))
    },[])



    return (
        <Container>
            <section className="choices">
                <button onClick={() => setSession("Produtos")}>
                    Produtos
                </button>
                <button onClick={() => setSession("Marcas")}>
                    Marcas
                </button>
                <button onClick={() => setSession("Categorias")}>
                    Categorias
                </button>
            </section>
            {session === "Produtos" && <EditProductsSession array={products} />}
            {session === "Marcas" && <EditBrandsSession array={brands}/>}
            {session === "Categorias" && <EditCategoriesSession array={categories}/>}
            
        </Container>
    )
}

export default AdminPage