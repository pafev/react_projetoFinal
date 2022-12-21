import { Container } from "./styles";
import logo from '../../assets/e-commerce.png'
import iconPerfil from '../../assets/perfil-icon-white.png'
import cartIcon from '../../assets/Shopping-Cart-icon.png'
import searchIcon from '../../assets/search-icon.png'

const Header = () => {
    return (
        <Container>
            <header className="navTop">
                <div className="navTopLeft">
                    <img src={logo} alt='logo'></img>
                    <p>E-commerce</p>
                </div>
                <div className="navTopRight">
                    <div className="Pesquisar">
                        <input placeholder="Pesquise seu produto"></input>
                        <img src={searchIcon} alt="pesquisar"></img>
                    </div>
                    <img src={cartIcon} alt='carrinho'></img>
                </div>
            </header>
            <header className="navBottom">
                <div className="navBottomLeft">
                    <p>Home</p>
                    <p>About Us</p>
                </div>
                <div className="navBottomRight">
                    <p>Entrar</p>
                    <p>Registrar</p>
                    <img src={iconPerfil} alt='perfil'></img>
                </div>
            </header>
        </Container>
    )
}

export default Header