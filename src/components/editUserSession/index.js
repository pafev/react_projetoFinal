import { useState } from "react"
import { useUserContext } from "../../context/useUserContext"
import { Container } from "./styles"
import { BiEdit } from 'react-icons/bi'
import { api } from "../../services/api"

const EditUserSession = () => {

    const {user} = useUserContext()    
    const [name, setName] = useState(user.name)
    const [credit, setCredit] = useState(user.credit_wallet)

    const changeName = async (newName) => {
        try {
            const response = await api.patch('/users/update', {user: {name: newName}})
            if (response.data) {
                setName(newName)
                alert('Nome alterado com sucesso')
            }
        } catch(e) {
            alert(e)
        }
    }

    const addCredits = async (moreCredits) => {
        try {
            const newCredits = parseInt(credit) + (parseInt(moreCredits) * 100)
            const response = await api.patch('/users/update', {user: {credit_wallet: newCredits}})
            if (response.data) {
                setCredit(newCredits)
                alert('Créditos adicionados com sucesso')
            }
        } catch(e) {
            alert(e)
        }
    }

    return (
        <Container>
            <div>
                <p>
                    {name}
                    <BiEdit className="icon" onClick={() => changeName(prompt("Digite o novo nome de usuário"))}/>
                </p>
                <span>Username</span>
            </div>
            <div>
                <p>{user.email}</p>
                <span>Email</span>
            </div>
            <div>
                <p>R$ {(parseFloat(credit) / 100 ).toFixed(2)}</p>
                <span>Créditos</span>
            </div>
            <button onClick={() => {
                addCredits(prompt("Digite a quantidade de créditos que deseja adicionar"))
            }}>
                Adicionar créditos
            </button>
        </Container>
    )
}

export default EditUserSession