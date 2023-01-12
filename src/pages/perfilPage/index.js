import { Container } from "./styles"
import UserCard from "../../components/userCard"
import { useState } from "react"
import EditUserSession from "../../components/editUserSession"
import AddressesSession from "../../components/addressesSession"
import backgroundPerfil from '../../assets/back-perfil1.jpg'

const PerfilPage = () => {

    const [session, setSession] = useState("Dados Do Usuário")

    return (
        <Container>
            <section style={{backgroundImage: `url(${backgroundPerfil})`}}
                 className="imageBackground"/>
            <UserCard/>
            <section className="content">
                <div className="header">
                    <h1>
                        {session}
                    </h1>
                    <div className="choices">
                        <button onClick={() => {
                            setSession("Dados Do Usuário")
                        }}>
                            Editar perfil
                        </button>
                        <button onClick={() => {
                            setSession("Endereços Do Usuário")
                        }}>
                            Endereços
                        </button>
                    </div>
                </div>
                {session === "Dados Do Usuário" && <EditUserSession/>}
                {session === "Endereços Do Usuário" && <AddressesSession/>}
            </section>
        </Container>
    )
}

export default PerfilPage