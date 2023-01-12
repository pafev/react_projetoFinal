import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../services/api"
import { Container } from "./styles"
import { photo } from "../../services/photo"
import noImage_url from '../../assets/no-image_url.jpg'
import {MdKeyboardArrowRight} from "react-icons/md"
import {BsBagCheck} from "react-icons/bs"

// import { useUserContext } from "../../context/useUserContext"


const ProductPage = () => {

    const {id} = useParams()

    // const {user} = useUserContext()

    const [product, setProduct] = useState({})

    // const [foto, setFoto] = useState(0)
    
    const [buyQuantity, setBuyQuantity] = useState(1)

    const purchase = () => {console.log("batata")}

    useEffect(() => {
        api.get(`/products/show/${id}`).then(response => setProduct(response.data))
    },[id])
    console.log(product)
    return (
        <Container>

            <div className="nomemarca">
                
                {product.brand} <MdKeyboardArrowRight/> {product.name} 
            </div>

            <div className="productInfo">

                <div className="productPhoto">

                    <div className="photosCascade">  
                    {product.images_url ?
                            product.images_url.slice(0,5).map((item, index) => (
                                <div>   
                                    <img src = {product.images_url ? photo.defaults.baseURL + product.images_url[index] : noImage_url } 
                                    alt = 'imagem do produto'/> 
                                </div>
                            )) :
                            <></>} 
                    </div>

                    <div className="photoMain">

                        <img src={product.images_url ? photo.defaults.baseURL + product.images_url[0] : noImage_url }
                        alt='imagem do produto'/>
                    </div>
                </div>

                <div className="textoProduto">
                    <h1>{product.name}</h1>
                    <h4>{product.brand}</h4>
                    <div className="productDesc">
                        <h4>
                            <p>Sobre esse item:</p>
                            {product.description}
                        </h4>
                    </div>

                </div>
            

                <div className="purchase">
                    <div className="price">
                        <h4>
                            R$
                        </h4>
                        <h1>{(parseFloat(product.price) / 100).toFixed(2)}</h1>

                    </div>
                    <div className="stock">
                        {product.stock< 1 ? <p>Não está disponível!</p> 
                        : <><p>Em estoque</p> 
                        {/* <p>{product.stock} Disponíveis</p> */}
                        </>}
                    </div>
                    <hr/> 
                    <p>Quantidade</p>  
                    <div className="buyQuantity">
                                
                            <button id="-" onClick ={()=> setBuyQuantity(buyQuantity - 1) }>
                                -
                            </button>
                            
                            <div className="numQuantity">
                                {buyQuantity}
                            </div>

                            <button id="+" onClick ={()=> setBuyQuantity(buyQuantity + 1) }>
                                + 
                            </button>
                        
                    </div>
                    <div className="buyButton">
                        <button onClick = {purchase}>
                            <BsBagCheck/> Comprar Agora

                        </button>
                        
                    </div>
                </div>
            </div>

            <div className brandProducts>

            </div>



        </Container>
    )
}

export default ProductPage