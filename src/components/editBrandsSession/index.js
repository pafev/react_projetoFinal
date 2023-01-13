import { Container } from "./styles"
import { BiSearchAlt } from 'react-icons/bi'
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { api } from "../../services/api"
import {AiOutlinePlus} from 'react-icons/ai'

const EditBrandsSession = () => {
    const [brands, setBrands] = useState([])

    // para filtrar o array pelo text
    const [text, setText] = useState('')
    const searchedArray = useMemo(() => {
        const lowerText = text.toLowerCase()
        return brands.filter((item) => item.name.toLowerCase().includes(lowerText))
    }, [text, brands])

    // para otimizar a busca na barra de pesquisa
    const timeoutRef = useRef(null)
    const delaySearch = 500 // (dada em ms)

    // Funções para o CRUD das marcas
    const getBrands = useCallback(() => {
        api.get('brands/index').then(response => setBrands(response.data))
    },[])

    const addBrand = async (nameNewBrand) => {
        try{
            const response = await api.post('/brands/create', {brand: {name: nameNewBrand}})
            if(response.data){
                setBrands([...brands, response.data])
                alert('Marca criada com sucesso')
            }
        } catch(e){
            alert(e)
        }
    }

    const removeBrand = async (idBrand) => {
        try{
            const response = await api.delete(`/brands/delete/${idBrand}`)
            if(response.data){
                getBrands()
                alert('Marca removida com sucesso')
            }
        } catch(e){
            alert(e)
        }
    }

    const updateBrand = async (idBrand, newName) => {
        try{
            const response = await api.patch(`/brands/update/${idBrand}`, {brand: {name: newName}})
            if(response.data){
                getBrands()
                alert('Nome da marca alterado com sucesso')
            }
        }catch(e){
            alert(e)
        }
    }

    // Para exibir corretamente as marcas mesmo ao alternar de session
    useEffect(() => {
        getBrands()
    },[getBrands])

    return (
        <Container>
            <div className="searchContent">
                <input placeholder='Pesquise a marca' 
                    onChange={(event) => {
                    window.clearTimeout(timeoutRef.current)
                    timeoutRef.current = window.setTimeout(() => {
                        setText(event.target.value)
                    }, delaySearch)
                    }}
                />
                <BiSearchAlt className="iconSearch"/>
            </div>
            <div className="searchedBrands">
                <button className="addItem"
                 onClick={() => {
                    addBrand(prompt('Digite o nome da marca que deseja adicionar'))
                 }}>
                    <AiOutlinePlus className="iconAdd"/>
                    Adicionar marca
                </button>
                <ul>
                    {searchedArray.length > 0 ? 
                    searchedArray.map((item) => (
                        <li key={item.id}>
                            <h1>{item.name}</h1>
                            <div className="buttonsCard">
                                <button onClick={() => {
                                    updateBrand(item.id, prompt('Digite o novo nome para essa marca'))
                                }}>
                                    Editar nome
                                </button>
                                <button onClick={() => {
                                    removeBrand(item.id)
                                }}>
                                    Excluir
                                </button>
                            </div>
                        </li>
                    )) : 
                    <li>Marca não encontrada...</li>}
                </ul>
            </div>
        </Container>
    )
}

export default EditBrandsSession