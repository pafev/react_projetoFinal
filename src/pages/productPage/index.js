import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../services/api"
import { Container } from "./styles"

const ProductPage = () => {

    const {id} = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        api.get(`/products/show/${id}`).then(response => setProduct(response.data))
    },[id])

    return (
        <Container>
            Você está na página do produto {product.name} de id {id}
        </Container>
    )
}

export default ProductPage