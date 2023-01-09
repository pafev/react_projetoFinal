import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { Container } from "./styles"

const ProductPage =()=> {
    const [product, setProduct] = useState([])
    useEffect(() => {
      api.get('/products/show/:id').then(response => setProduct(response.data))

    }, [])
    
    return(

        <Container>
            <title>              
                <p> 
                    Pagina do produto aqui 
                </p>  
            </title>

            <div>
            <div className="nomeProoduto">
                    <div>
                        <h1>
                            Categoria - Nome do Produto
                        </h1>
                    </div>
                </div>
            </div>
        </Container>
    )

}

export default ProductPage