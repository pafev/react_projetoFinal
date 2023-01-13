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

    // declarações e funções pro dropdown do Editar fotos
    const [showDropdownFt, setShowDropdownFt] = useState(false)
    const contentRefFt = useRef()
    useEffect(() => {
        const handler = (event) => {
            if(contentRefFt.current && !contentRefFt.current.contains(event.target)){
                setShowDropdownFt(false)
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

    // Funções para edição das imagens dos produtos

    const addImages = async (files, idProduct) => {
        const formData = new FormData()
        formData.append('images[]', files[0])
        console.log(files[0])
        try {
            const response = await api.post(`/products/add-image/${idProduct}`, formData)
            if (response.data){
                console.log(response.data)
                alert('Foto adicionada com sucesso')
            }
        } catch(e) {
            alert(e)
        }
    }

    const clearImages = async (idProduct) => {
        try {
            const response = await api.delete(`/products/clear-images/${idProduct}`)
            if (response.data){
                alert('Fotos limpadas com sucesso')
            }
        } catch(e) {
            alert(e)
        }
    }


    return (
        <Container>
            <div className="header">
                <h1>
                    {item.name}
                </h1>
                <span>
                    {item.description}
                </span>
            </div>
            <div className="crud">
                <div className="dropdown" ref={contentRefFt}>
                    <button onClick={() => setShowDropdownFt(!showDropdownFt)}>
                        Fotos <BsChevronDoubleDown className="icon"
                                id={showDropdownFt? "iconDown" : ''}/>
                    </button>
                    <ul id={showDropdownFt? 'editShow' : ''}>
                        <li>
                            <label htmlFor={`selecao-arquivo1${item.id}`}>
                                Adicionar foto
                            </label>
                            <input type='file' id={`selecao-arquivo1${item.id}`}
                             onChange={(event) => addImages(event.target.files, item.id)}/>
                        </li>
                        <li onClick={() => clearImages(item.id)}>
                            Remover fotos
                        </li>
                    </ul>
                </div>
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