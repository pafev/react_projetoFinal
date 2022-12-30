import { Container } from "./styles"

const ProductCard = ({product}) => {

    return (
        <Container>
            <span>nome: {product.name} || </span>
            <span>marca: {product.brand}</span>
        </Container>
    )
}

export default ProductCard