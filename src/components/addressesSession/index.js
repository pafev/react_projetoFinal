import { useCallback, useState } from "react"
import { useUserContext } from "../../context/useUserContext"
import { Container } from "./styles"
import {AiOutlinePlus} from 'react-icons/ai'
import { api } from "../../services/api"

const AddressesSession = () => {

    const {user} = useUserContext()
    const [addresses, setAddresses] = useState(user.addresses)

    const addAddress = async (newAddressDescription) => {
        try {
            const response = await api.post('/addresses/create',
                            {address: {description: newAddressDescription}})
            if (response.data){
                setAddresses([...addresses, response.data])
                alert('Endereço adicionado com sucesso')
            }
        } catch(e){
            alert(e)
        }
    }

    const removeAddress = async (idAdress) => {
        try {
            const response = await api.delete(`/addresses/delete/${idAdress}`)
            if (response.data){
                getAddresses()     
                alert('Endereço deletado com sucesso')
            }
        } catch(e){
            alert(e)
        }
    }

    const updateAddress = async (idAdress, updateDescription) => {
        try {
            const response = await api.patch(`/addresses/update/${idAdress}`,
                            {address: {description: updateDescription}})
            if (response.data){
                getAddresses()
                alert('Endereço editado com sucesso')
            }
        } catch(e){
            alert(e)
        }
    }

    const getAddresses = useCallback(() => {
        api.get('/addresses/index').then(response => setAddresses(response.data))
    },[])

    return (
        <Container>
            <button className="addAddressBtn"
            onClick={() => addAddress(prompt('Digite o endereço que deseja adicionar: '))}>
                    <AiOutlinePlus/> Adicionar novo endereço
            </button>
            <ul>
                {addresses && addresses.map((address) => (
                    <li key={address.id}>
                        <div className="header">
                            <h1>{user.name}</h1>
                            <p>{address.description}</p>
                        </div>
                        <div className="buttons">
                            <button onClick={() => removeAddress(address.id)}>Excluir</button>
                            <button onClick={() => {
                                updateAddress(address.id, prompt('Digite o endereço atualizado'))
                                }}>Editar</button>
                        </div>
                    </li>
                ))}
            </ul>
        </Container>
    )
}

export default AddressesSession