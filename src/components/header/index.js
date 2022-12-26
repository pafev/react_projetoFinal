import { useEffect, useState } from 'react';
import { Container } from "./styles";
import logo from '../../assets/e-commerce.png'
import cartIcon from '../../assets/Shopping-Cart-icon.png'
import searchIcon from '../../assets/search-icon.png'
import { Link } from "react-router-dom";
import DropdownPerfil from '../dropdownPerfil';

const Header = () => {

    const [someNav, setSomeNav] = useState()
    
    useEffect(() => {
        let localizacaoScroll = window.scrollY
        const posicaoScroll = () => {
        let deslocamentoAtual = window.scrollY
        if(localizacaoScroll >= deslocamentoAtual){
            setSomeNav(false)
        }
        else{
            setSomeNav(true)
        }
        localizacaoScroll = deslocamentoAtual
        }

        window.addEventListener('scroll', posicaoScroll)
    },[])

    return (
        <Container>
            <nav className="navTop">
                <Link to='/' className="navTopLeft">
                    <img src={logo} alt='logo'></img>
                    <p>Ecommerce</p>
                </Link>

                <div className="navTopRight">
                    <div className="Pesquisar">
                        <input placeholder="Pesquise seu produto" 
                               type="search">
                        </input>
                        <button className="pesquisarButton">
                            <img src={searchIcon} alt="pesquisar"></img>
                        </button>
                    </div>
                    <button className="pesquisarButtonResponsive">
                        <img src={searchIcon} alt="pesquisar"></img>
                    </button>
                    <Link to='/carrinho' id="iconCarrinho">
                        <img src={cartIcon} alt='carrinho'></img>
                    </Link>
                    {/* <button className="Menu">
                        <img src={menuIcon} alt='menu'></img>
                    </button> */}
                </div>
            </nav>

            <nav className="navBottom" id={someNav? 'hiddenNav' : ''}>
                <div className="navBottomLeft">
                    <Link to='/' className="link" id='home'>Home</Link>
                    <Link to='/sobre' className="link" id='about'>About Us</Link>
                </div>
                
                <div className="navBottomRight">
                    <Link to='/entrar' className="link" id='login'>Entrar</Link>
                    <Link to='registrar' className="link" id='register'>Registrar</Link>
                    <DropdownPerfil />
                </div>
            </nav>
        </Container>
    )
}

export default Header