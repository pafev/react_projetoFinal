import { Container } from "./styles"
import { useUserContext } from '../../context/useUserContext'

const PerfilPage = () => {

    const {user} = useUserContext()

    return (
        <Container>
            <p>Bem vindo {user.name}</p>
        </Container>
    )
}

export default PerfilPage