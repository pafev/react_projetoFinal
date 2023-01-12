import { Container } from "./styles"
import { useState, useRef, useEffect } from "react"
// import { api } from "../../services/api"

const AdminProductCard = ({item, products, setProducts, getProducts}) => {

    // declarações e funções pro dropdown do Editar produto
    const [showDropdown, setShowDropdown] = useState(false)
    const contentRef = useRef()
    useEffect(() => {
        const handler = (event) => {
            if(contentRef.current && !contentRef.current.contains(event.target)){
                setShowDropdown(false)
            }
        }
        document.addEventListener('mousedown', handler)
        document.removeEventListener('mousedown', handler)
    },[])


    // funções do CRUD para os produtos

    // const addProducts = async (nameNew, priceNew, brandNew, categoryNew, stockQuantityNew) => {
    //     try{
    //         const response = await api.post('/products/create', {product: 
    //             {name: nameNew,
    //              price: priceNew,
    //              brand_id: brandNew,
    //              category_id: categoryNew,
    //              stock_quantity: stockQuantityNew}
    //         })
    //         if(response.data){
    //             setProducts([...products, response.data])
    //             alert('Produto criado com sucesso')
    //         }
    //     } catch(e){
    //         alert(e)
    //     }
    // }

    // const removeBrand = async (idProduct) => {
    //     try{
    //         const response = await api.delete(`/products/delete/${idProduct}`)
    //         if(response.data){
    //             getProducts()
    //             alert('Produto removido com sucesso')
    //         }
    //     } catch(e){
    //         alert(e)
    //     }
    // }

    // const updateBrand = async (idProduct, object) => {
    //     try{
    //         const response = await api.patch(`/products/update/${idProduct}`, {brand: object})
    //         if(response.data){
    //             getProducts()
    //             alert('Produto alterado com sucesso')
    //         }
    //     }catch(e){
    //         alert(e)
    //     }
    // }


    return (
        <Container>
            <li key={item.id} className='productCard'>
                <h1>
                    {item.name}
                </h1>
                <div className="crud">
                    <div className="editDropdown" ref={contentRef}>
                        <button onClick={() => setShowDropdown(!showDropdown)}>Editar produto</button>
                        <ul id={showDropdown? 'editShow' : ''}>
                            <li>Editar preço</li>
                            <li>Editar nome</li>
                            <li>Editar descrição</li>
                            <li>Editar quantidade de estoque</li>
                            <li>Editar marca</li>
                            <li>Editar categoria</li>
                            <li>Adicionar foto</li>
                        </ul>
                    </div>
                    <button>Excluir</button>
                </div>
            </li>
        </Container>
    )
}

export default AdminProductCard