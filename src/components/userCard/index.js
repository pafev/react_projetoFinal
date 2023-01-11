import { useUserContext } from "../../context/useUserContext"
import { Container } from "./styles"
import { AiOutlineCamera } from 'react-icons/ai'
import avatar from '../../assets/perfil avatar.jpg'
import { photo } from '../../services/photo'
import { api } from "../../services/api"
import { useState } from "react"

const UserCard = () => {

    const {user} = useUserContext()

    const [picture, setPicture] = useState(user.profile_picture_url ? 
                                   photo.defaults.baseURL + user.profile_picture_url :
                                   avatar)

    const addPicture = async (files) => {
        const formData = new FormData()
        formData.append('profile_picture[]', files[0])

        const response = await api.post(`/users/add-picture`, formData)
        if (response.data){
            setPicture(photo.defaults.baseURL + response.data.profile_picture_url)
            alert('Foto adicionada com sucesso')
        }
    }

    return (
        <Container>
            <div className="imageCard">
                <img src={picture} alt='imagem do usuário'/>
                <label htmlFor='selecao-arquivo'>
                    Alterar foto <AiOutlineCamera />
                </label>
                <input type="file" id="selecao-arquivo" 
                 onChange={(event) => addPicture(event.target.files)}/>
            </div>
            <h1>
                {user.name}
            </h1>
            <h2>
                {user.is_admin? 'Administrador' : 'Cliente'}
            </h2>
        </Container>
    )
}

export default UserCard