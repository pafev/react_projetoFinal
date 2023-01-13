import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { api } from "../../services/api"
import { Container } from "./styles"
import { photo } from "../../services/photo"
import noImage_url from '../../assets/no-image_url.jpg'
import {MdKeyboardArrowRight} from "react-icons/md"
import {BsBagCheck} from "react-icons/bs"
import {BsCartPlus} from "react-icons/bs"
import ProductCard from "../../components/productCard"
import { useUserContext } from "../../context/useUserContext"

const ProductPage = () => {

    const {user} = useUserContext()

    const navigate = useNavigate()

    const {id} = useParams()

    const [brandProducts, setBrandProducts] = useState(undefined)

    const [foto, setFoto] = useState(0)
    
    const [buyQuantity, setBuyQuantity] = useState(1)

    const purchase = async () => {
        try {
            const response = await api.patch(`/products/update-stock/${id}`, 
                                {product:{stock_quantity: (product.stock_quantity - buyQuantity)}})
            var confirmPurchase = window.confirm('Você têm certeza que deseja realizar esta compra?')
            if (response.data && (product.price * buyQuantity) <= user.credit_wallet &&
                confirmPurchase === true ) {
                
                try {
                    const response = await api.patch(`/users/update`, 
                    {user: {credit_wallet: (user.credit_wallet - (product.price * buyQuantity))}})
                    if (response.data) {
                        alert('Compra efetuada!')
                    }
                } catch(e) {
                    alert(e)
                }

            } else {
                alert('Não foi possível efetuar a compra :(')
            }
        } catch(e) {
            alert(e)
        }
    }

    const addToCart = async () => {
        try {
            const response = await api.post('/purchases/create', 
            {purchase: {product_id: product.id, quantity: buyQuantity}})
            if (response.data) {
                alert('Item adicionado ao carrinho')
            }
        } catch(e) {
            alert(e)
        }
    }

    const [product, setProduct] = useState({})

    useEffect(() => {
        api.get(`/products/show/${id}`).then(response => setProduct(response.data))
    },[id])

    useEffect(() => {
        api.get(`/products/index-brand/${product.brand_id}`).then(response => setBrandProducts(response.data))
    },[product.brand_id])
  
    return (
        <Container>
            <div className="nomemarca">               
                {product.brand} <MdKeyboardArrowRight className="rightArrow"/> {product.name} 
            </div>
            <div className="productInfo">
                <div className="productPhoto">
                    <div className="photosCascade">  
                    {product.images_url ?
                            product.images_url.slice(0,5).map((item, index) => (
                                <div key={item} onClick={()=> {
                                    setFoto(index)
                                    }}>   
                                    <img src = {product.images_url ? photo.defaults.baseURL + product.images_url[index] : noImage_url } 
                                    alt = 'imagem do produto'/> 
                                </div>
                            )) :
                            <></>} 
                    </div>
                </div>
                
                <div className="contentRight">
                    <div className="photoMain">
                        <img src={product.images_url ? photo.defaults.baseURL + product.images_url[foto] : noImage_url} 
                        alt="imagem do produto"></img>             
                    </div>
                    <div className="textoProduto">
                        <h1>{product.name}</h1>
                        <h2>{product.brand}</h2>
                        <p className="productDesc">
                                {product.description}          
                        </p>
                    </div>

                    <div className="purchase">
                        <div className="price">
                            <h4>
                                R$
                            </h4>
                            <h1>{(parseFloat(product.price) / 100).toFixed(2)}</h1>
                        </div>
                        <div className="stock">
                            {product.stock_quantity < 1 ? <p>Não está disponível!</p> 
                            : <p>{product.stock_quantity} disponíveis </p>}
                        </div>
                        {/* <hr/>  */}
                        <p>Quantidade</p>  
                        <div className="buyQuantity">          
                            <button id="-" onClick ={()=> {
                                buyQuantity > 1 &&
                                setBuyQuantity(buyQuantity - 1)
                            }}>
                                -
                            </button>                            
                            <div className="numQuantity">
                                {buyQuantity}
                            </div>
                            <button id="+" onClick ={()=> {
                                buyQuantity < product.stock_quantity &&
                                setBuyQuantity(buyQuantity + 1)
                            }}>
                                + 
                            </button>
                        </div>
                        <div className="buyButton">
                            <button id = 'buy' onClick = {() => {
                                user? purchase() : navigate('/entrar')
                            }}>
                                <BsBagCheck/> Comprar Agora
                            </button>
                            <button id = 'cart' onClick = {() => {
                                user? addToCart() : navigate('/entrar')
                            }}>
                            <BsCartPlus/> Adicionar ao Carrinho
                            </button>               
                        </div>
                    </div>
                </div>

            </div>                       

            <div className ="brandProducts">
                <h1>
                    Outros produtos de {product.brand}
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
    </Container>
)
}

export default ProductPage