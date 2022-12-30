import { useUserContext } from "../../context/useUserContext"
import { Container } from "./styles"
import { AiOutlineCamera } from 'react-icons/ai'

const UserCard = () => {

    const {user} = useUserContext()

    return (
        <Container>
            <div className="imageCard">
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