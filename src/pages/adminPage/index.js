import { useEffect, useState } from "react"
import EditBrandsSession from "../../components/editBrandsSession"
import EditCategoriesSession from "../../components/editCategoriesSession"
import EditProductsSession from "../../components/editProductsSession"
import { Container } from "./styles"
import { api } from "../../services/api"
import { MdProductionQuantityLimits } from 'react-icons/md'
import { TbBrandPagekit } from 'react-icons/tb'
import { BiCategoryAlt } from 'react-icons/bi'

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
                    <MdProductionQuantityLimits className="icon"/>
                    <span>Edite os Produtos</span>
                </button>
                <button onClick={() => setSession("Marcas")}>
                    <TbBrandPagekit className="icon"/>
                    <span>Edite as Marcas</span>
                </button>
                <button onClick={() => setSession("Categorias")}>
                    <BiCategoryAlt className="icon"/>
                    <span>Edite as Categorias</span>
                </button>
            </section>
            {session === "Produtos" && <EditProductsSession array={products} />}
            {session === "Marcas" && <EditBrandsSession array={brands}/>}
            {session === "Categorias" && <EditCategoriesSession array={categories}/>}
            
        </Container>
    )
}

export default AdminPage