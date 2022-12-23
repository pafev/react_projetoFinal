import { Container } from "./styles";
import logo from '../../assets/e-commerce.png'
import iconPerfil from '../../assets/perfil-icon-white.png'
import cartIcon from '../../assets/Shopping-Cart-icon.png'
import searchIcon from '../../assets/search-icon.png'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Container>
            <nav className="navTop">
                <Link to='/' className="navTopLeft">
                    <img src={logo} alt='logo'></img>
                    <p>E-commerce</p>
                </Link>

                <div className="navTopRight">
                    <div className="Pesquisar">
                        <input placeholder="Pesquise seu produto" type="search"></input>
                        <button className="pesquisarButton">
                            <img src={searchIcon} alt="pesquisar"></img>
                        </button>
                    </div>
                    <Link to='/carrinho' id="iconCarrinho">
                        <img src={cartIcon} alt='carrinho'></img>
                    </Link>
                </div>
            </nav>

            <nav className="navBottom">
                <div className="navBottomLeft">
                    <Link to='/' className="link" id='home'>Home</Link>
                    <Link to='/sobre' className="link" id='about'>About Us</Link>
                </div>
                
                <div className="navBottomRight">
                    <Link to='/entrar' className="link" id='login'>Entrar</Link>
                    <Link to='registrar' className="link" id='register'>Registrar</Link>
                    <Link to='/perfil' id="profile">
                        <img src={iconPerfil} alt='perfil'></img>
                    </Link>
                </div>
            </nav>
        </Container>
    )
}

export default Header