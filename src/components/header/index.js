import { useEffect, useState } from 'react';
import { Container } from "./styles";
import logo from '../../assets/e-commerce.png'
import { RiShoppingCartLine } from 'react-icons/ri'
import { Link } from "react-router-dom";
import DropdownPerfil from '../dropdownPerfil';

const Header = () => {

    const [someNav, setSomeNav] = useState()

    // animação da navbar sumindo ao rolar o mouse para baixo
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

                <Link to='/carrinho' className='navTopRight'>
                    <div className='contentCarrinho'>
                        <RiShoppingCartLine className='iconCarrinho'/>
                    </div>
                    <p>Carrinho</p>
                </Link>
            </nav>

            <nav className="navBottom" id={someNav? 'hiddenNav' : ''}>
                <div className="navBottomLeft">
                    <Link to='/' className="link" id='home'>Home</Link>
                    <Link to='/sobre' className="link" id='about'>About Us</Link>
                </div>
                
                <div className="navBottomRight">
                    <Link to='/entrar' className="link" id='login'>Entrar</Link>
                    <Link to='/registrar' className="link" id='register'>Registrar</Link>
                    <DropdownPerfil />
                </div>
            </nav>
        </Container>
    )
}

export default Header