import { Container } from "./styles"
import { useEffect, useMemo, useState } from "react"
import { api } from "../../services/api"
import Dropdown from "../dropdown"
import DropdownPrice from "../dropdownPrice"
import { BsFilterRight } from 'react-icons/bs'
import ProductCard from "../productCard"

const FiltersContent = () => {
    // para renderizar as opções de categorias no filtro
    const [categories, setCategories] = useState([])
    useEffect( () => {
        api.get('/categories/index').then(response => setCategories(response.data))
    },[])

    //para filtrar os produtos pela categoria
    const [categoryId, setCategoryId] = useState(0)
    const [filteredProducts, setFilteredProducts] = useState([])
    useEffect(() => {
        if (categoryId !== 0) {
            api.get(`/products/index-category/${categoryId}`)
            .then(response => setFilteredProducts(response.data))
        } else {
            api.get('/products/index').then(response => setFilteredProducts(response.data))
        }
    }, [categoryId])

    // para filtrar os produtos pelo preço
    const [filterPriceMin, setFilterPriceMin] = useState(0)
    const [filterPriceMax, setFilterPriceMax] = useState(Infinity)
    const finalFilteredProducts = useMemo(() => {
        return filteredProducts.filter((product) => (
            product.price >= filterPriceMin && product.price <= filterPriceMax
        ))
    }, [filterPriceMin, filterPriceMax, filteredProducts])

    return (
        <Container>
            <div className="filters">
                <h1> <BsFilterRight id="iconFilter"/> Filtros </h1>
                <Dropdown name={'Categoria'} array={categories} setObjectId={setCategoryId}/>
                <DropdownPrice setFilterPriceMin={setFilterPriceMin} 
                    setFilterPriceMax={setFilterPriceMax}
                />
                <button className="clear" onClick={() => {
                    setCategoryId(0)
                    setFilterPriceMin(0)
                    setFilterPriceMax(Infinity)
                }}>
                    <span> Limpar filtros </span>
                </button>
            </div>
            <div className="productsContent">
                <ul>
                    {finalFilteredProducts && finalFilteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product}/>
                    ))}
                </ul>
            </div>
        </Container>
    )
}

export default FiltersContent