import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../services/api"
import { Container } from "./styles"
import { photo } from "../../services/photo"
import noImage_url from '../../assets/no-image_url.jpg'
import {MdKeyboardArrowRight} from "react-icons/md"
import {BsBagCheck} from "react-icons/bs"
import ProductCard from "../../components/productCard"
// import { useUserContext } from "../../context/useUserContext"

const ProductPage = () => {

    const {id} = useParams()

    // const {user} = useUserContext()

    const [product, setProduct] = useState({})

    const [brandProducts, setBrandProducts] = useState(undefined)

    const [foto, setFoto] = useState(0)
    
    const [buyQuantity, setBuyQuantity] = useState(1)

    const purchase = () => {console.log("batata")}

    const [product, setProduct] = useState({})

    useEffect(() => {
        api.get(`/products/show/${id}`).then(response => setProduct(response.data))
    },[id])

    useEffect(() => {
        api.get(`/products/index-brand/${product.brand_id}`).then(response => setBrandProducts(response.data))
    },[product.brand_id])

    console.log(product.brand_id)
  
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
                                <div onClick={()=> setFoto(index)}>   
                                    <img src = {product.images_url ? photo.defaults.baseURL + product.images_url[index] : noImage_url } 
                                    alt = 'imagem do produto'/> 
                                </div>
                            )) :
                            <></>} 
                    </div>

                    <div className="photoMain">
                        
                        <img src={product.images_url ? photo.defaults.baseURL + product.images_url[foto] : noImage_url }
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
                        {product.stock_quantity< 1 ? <p>Não está disponível!</p> 
                        : <><p>Em estoque: {product.stock_quantity} Disponíveis </p> 
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
                        <button id = 'buy'onClick = {purchase}>
                            <BsBagCheck/> Comprar Agora

                        </button>
                        
                    </div>
                </div>
            </div>
            <hr/>                        
            <div className brandProducts>
                <h1>
                    Outros produtos de {product.brand}:
                </h1>
                
                <div className=" productCards">
                    {brandProducts ? 
                        brandProducts.slice(0,6).map((item,index) => (
                            <div>   
                                <ProductCard key={item.id} product={item}/> 
                            </div>
                        )) :  <></>    
                    }
                </div>
            </div>
}

export default ProductPage