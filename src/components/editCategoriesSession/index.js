import { Container } from "./styles"
import { BiSearchAlt } from 'react-icons/bi'
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { api } from "../../services/api"

const EditCategoriesSession = () => {
    const [categories, setCategories] = useState([])

    // para filtrar o array pelo text
    const [text, setText] = useState('')
    const searchedArray = useMemo(() => {
        const lowerText = text.toLowerCase()
        return categories.filter((item) => item.name.toLowerCase().includes(lowerText))
    }, [text, categories])

    // para otimizar a busca na barra de pesquisa
    const timeoutRef = useRef(null)
    const delaySearch = 500 // (dada em ms)

    // Funções para o CRUD das categorias
    const getCategories = useCallback(() => {
        api.get('categories/index').then(response => setCategories(response.data))
    },[])

    const addCategory = async (nameNewCategory) => {
        try{
            const response = await api.post('/categories/create', {category: {name: nameNewCategory}})
            if(response.data){
                setCategories([...categories, response.data])
                alert('Categoria criada com sucesso')
            }
        } catch(e){
            alert(e)
        }
    }

    const removeCategory = async (idCategory) => {
        try{
            const response = await api.delete(`/categories/delete/${idCategory}`)
            if(response.data){
                getCategories()
                alert('Categoria removida com sucesso')
            }
        } catch(e){
            alert(e)
        }
    }

    const updateCategory = async (idCategory, newNameCategory) => {
        try{
            const response = await api.patch(`/categories/update/${idCategory}`,
                                {category: {name: newNameCategory}})
            if(response.data){
                getCategories()
                alert('Nome da categoria alterado')
            }
        } catch(e){
            alert(e)
        }
    }

    // Para exibir corretamente as marcas mesmo ao alternar de session
    useEffect(() => {
        getCategories()
    },[getCategories])

    return (
        <Container>
            <div className="searchContent">
                <input placeholder='Pesquise a categoria' 
                    onChange={(event) => {
                    window.clearTimeout(timeoutRef.current)
                    timeoutRef.current = window.setTimeout(() => {
                        setText(event.target.value)
                    }, delaySearch)
                    }}
                />
                <BiSearchAlt className="iconSearch"/>
            </div>
            <div className="searchedCategories">
                <button className="addCategoryBtn"
                 onClick={() => {
                    addCategory(prompt('Digite o nome da categoria que deseja adicionar'))
                 }}>
                    Adicionar categoria
                </button>
                <ul>
                    {searchedArray.length > 0 ? 
                    searchedArray.map((item) => (
                        <li key={item.id}>
                            <h1>{item.name}</h1>
                            <button onClick={() => {
                                updateCategory(item.id, prompt('Digite o novo nome para essa categoria'))
                            }}>Editar nome</button>
                            <button onClick={() => {
                                removeCategory(item.id)
                            }}>
                                Excluir
                            </button>
                        </li>
                    )) : 
                    <li>Categoria não encontrada...</li>}
                </ul>
            </div>
        </Container>
    )
}

export default EditCategoriesSession