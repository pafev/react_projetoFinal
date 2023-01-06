import { useUserContext } from "../../context/useUserContext"
import { Container } from "./styles"
import { AiOutlineCamera } from 'react-icons/ai'
import avatar from '../../assets/perfil avatar.jpg'
import { photo } from '../../services/photo'

const UserCard = () => {

    const {user} = useUserContext()

    return (
        <Container>
            <div className="imageCard">
                <img src={user.profile_picture_url ? photo.defaults.baseURL + user.profile_picture_url :
                avatar} alt='imagem do usuário'/>
                <button>
                    Alterar foto <AiOutlineCamera />
                </button>
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