import { Container } from "./styles"
<<<<<<< HEAD
const productCard = () => {
    return (
        <div className = "card">
            <Container>
            <div className="cardpic">
                <p>O produto fica aqui</p>

            </div>
            </Container>
        </div>
        
    )

}

export default productCard
=======
import { photo } from "../../services/photo"
import noImage_url from '../../assets/no-image_url.jpg'
import { Link } from "react-router-dom"

const ProductCard = ({product}) => {

    return (
        <Container>
            <Link className="productContent" to='/'>
                <img src={product.images_url ? photo.defaults.baseURL + product.images_url[0] : noImage_url }
                 alt='imagem do produto'/>
                <h1>{product.name}</h1>
                <span>R${(parseFloat(product.price) / 100).toFixed(2)}</span>                          
            </Link>
        </Container>
    )
}

export default ProductCard
>>>>>>> 86152e69050af8bf1fce604c9db911174c0fed23
