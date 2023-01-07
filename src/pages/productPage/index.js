import { useEffect, useState } from "react"
import { api } from "../../services/api"

const ProductPage =()=> {
    const [product, setProduct] = useState([])
    useEffect(() => {
      api.get('/products/show/:id').then(response => setProduct(response.data))

    }, [])
    
    return(
        <>
        <title>      
        
            <p> 
                Pagina do produto aqui 
            </p>  
        </title>
        <div>
            <li>
                Teste de texto

            </li>
        </div>
        </>
    )

}

export default ProductPage