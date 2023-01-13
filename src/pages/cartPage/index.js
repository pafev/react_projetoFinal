import { useCallback, useEffect, useState } from "react"
import Container from "./styles"
import { api } from "../../services/api"
import { photo } from '../../services/photo'

const CartPage = () => {

    const [purchases, setPurchases] = useState([])
    const [totalValue, setTotalValue] = useState(0)

    const getPurchases = useCallback(() => {
        api.get('purchases/index').then(response => setPurchases(response.data))
    },[])

    const getCart = useCallback(() => {
        api.get('/carts/view').then(response => setTotalValue(response.data.value))
    },[])

    const getProductImage = async (productId) => {
        const response = await api.get(`/products/show/${productId}`)
        if (response.data) {
            return response.data.images_url[0]
        } 
    }

    useEffect(() => {
        getPurchases()
        getCart()
    }, [getPurchases, getCart])

    return (
        <Container>
            <section>
                <div className='Header'>
                    <h1>
                        Carrinho de compras ({purchases.length})
                    </h1>
                    <div className="cartData">
                        <span>
                            Subtotal: ({(parseFloat(totalValue)/100).toFixed(2)})
                        </span>
                        <button>
                            Compre Agora
                        </button>
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th className="productTable">Produto</th>
                            <th className="priceTable">Preço unitário</th>
                            <th className="quantityTable">
                                Quantidade
                            </th>
                            <th className="totalPriceTable">
                                Preço total
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {purchases.map((item) => (
                        <tr key={item.id}>
                            <th><button>Excluir</button></th>
                            <th>
                                <img 
                                src={
                                    photo.defaults.baseURL + getProductImage(item.product_data.id)}
                                alt='imagem do produto'
                                />
                            </th>
                            <th>{(parseFloat(item.value)/100).toFixed(2)}</th>
                            <th><input type="number"/></th>
                            <th>{(parseFloat(item.value)/100).toFixed(2)}</th>
                        </tr>
                        ))}
                    </tbody>
                </table>
                <span>
                    Subtotal: ({(parseFloat(totalValue)/100).toFixed(2)})
                </span>
            </section>
        </Container>
    )
}

export default CartPage