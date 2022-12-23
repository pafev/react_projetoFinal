import { Container } from "./styles"
import instagramIcon from '../../assets/instagram icon.png'

const Footer = () => {
    return (
        <Container>
            <div className="footerLeft">
                <ul>
                    <li><a href="https://struct.unb.br" target="_blank" rel="noreferrer">
                        Struct-trainee
                    </a></li>
                    <li className="email">danieljosepalmar@gmail.com</li>
                    <li className="email">paulofvilarimda@gmail.com</li>
                </ul>
            </div>
            <div className="footerMid">
                <h1>
                    @2022-2022, E-commerce.com, Ltda.
                </h1>
            </div>
            <div className="footerRight">
                <ul>
                    <li><a href="https://www.instagram.com/structunb/" target="_blank" rel="noreferrer">
                        <img src={instagramIcon} alt='instagram'></img>
                    </a></li>
                    <li>acesse nossas redes</li>
                </ul>
            </div>
        </Container>
    )
}

export default Footer