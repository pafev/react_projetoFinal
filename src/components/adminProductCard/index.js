import { Container } from "./styles"
import { useState, useRef, useEffect } from "react"
import { api } from "../../services/api"
import { BsChevronDoubleDown } from 'react-icons/bs'

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
        // document.removeEventListener('mousedown', handler)
    },[])


    // funções do CRUD para os produtos

    const removeProduct = async (idProduct) => {
        try{
            const response = await api.delete(`/products/delete/${idProduct}`)
            if(response.data){
                getProducts()
                alert('Produto removido com sucesso')
            }
        } catch(e){
            alert(e)
        }
    }

    const updateProduct = async (idProduct, object) => {
        try{
            const response = await api.patch(`/products/update/${idProduct}`, {product: object})
            if(response.data){
                getProducts()
                alert('Produto alterado com sucesso')
            }
        }catch(e){
            alert(e)
        }
    }


    return (
        <Container>
                <h1>
                    {item.name}
                </h1>
                <div className="crud">
                    <div className="dropdown" ref={contentRef}>
                        <button onClick={() => setShowDropdown(!showDropdown)}>
                            Editar produto <BsChevronDoubleDown className="icon"
                                            id={showDropdown? "iconDown" : ''}/>
                        </button>
                        <ul id={showDropdown? 'editShow' : ''}>
                            <li onClick={() => {
                                const newPrice = parseInt(parseFloat(prompt('Digite o novo preço:'))*100)
                                console.log(newPrice)
                                updateProduct(item.id, {price: newPrice})
                            }}>Editar preço</li>
                            <li onClick={() => {
                                updateProduct(item.id, {name: prompt('Digite o novo preço')})
                            }}>Editar nome</li>
                            <li onClick={() => {
                                updateProduct(item.id, {description: prompt('Digite a nova descrição')})
                            }}>Editar descrição</li>
                            <li onClick={() => {
                                updateProduct(item.id, {stock_quantity: parseInt(prompt('Digite a nova quantidade em estoque'))})
                            }}>Editar estoque</li>
                            <li onClick={() => {
                                updateProduct(item.id, {brand_id: parseInt(prompt('Digite o id da nova marca'))})
                            }}>Editar marca</li>
                            <li onClick={() => {
                                updateProduct(item.id, {category_id: parseInt(prompt('Digite o id da nova categoria'))})
                            }}>Editar categoria</li>
                            {/* <li>Adicionar foto</li> */}
                        </ul>
                    </div>
                    <button onClick={() => {
                        removeProduct(item.id)
                    }}>Excluir</button>
                </div>
        </Container>
    )
}

export default AdminProductCard