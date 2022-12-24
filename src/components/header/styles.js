import styled from 'styled-components'
export const Container = styled.header`
overflow: hidden;

#hiddenNav {
    top: 1.65rem;
}

.navBottom {
    position: fixed;
    width: 100%;
    top: 4.2rem;
}

.Menu, .pesquisarButtonResponsive {
    display: none;
}

.navTop {
    box-shadow: 0px 2px 7px rgba(0,0,0,0.5);
    z-index: 1;
    position: fixed;
    top: 0;
    background-color: #F3F3F3;
    height: 4.2rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 2.5rem 0 2rem;
}

.navTopLeft {
    text-decoration: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: black;
}

.navTopLeft img {
    width: 2.1rem;
    height: 2rem;
    margin-right: 0.3rem;
}

.navTopRight {
    display: flex;
    align-items: center;
}

.navTopRight #iconCarrinho img {
    position: relative;
    top: 0.1rem;
    cursor: pointer;
    width: 1.8rem;
    height: 1.9rem;
}

.navTopRight .Pesquisar {
    display: flex;
    background-color: white;
    height: 2.1rem;
    width: 26rem;
    justify-content: space-between;
    padding: 0.5rem;
    border-radius: 4px;
    margin-right: 1.6rem;
    border: 1px solid rgba(0, 0, 0, 0.3);
}

.navTopRight .Pesquisar input {
    outline: none;
    border: none;
    width: 100%;
    font-size: 15px;
}

.navTopRight .pesquisarButton {
    position: relative;
    bottom: 0.1rem;
    height: 1.3rem;
    width: auto;
    cursor: pointer;
    background: transparent;
    border: none;
}

.navTopRight .pesquisarButton img {
    height: 100%;
    width: 100%;
    opacity: 0.6;
}

.navBottom {
    position: fixed;
    top: 4.2rem;
    width: 100%;
    color: white;
    background-color: black;
    display: flex;
    justify-content: space-between;
    height: 2.5rem;
    font-weight:600;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    transition: top 0.2s;
}

.navBottomLeft {
    display: flex;
    margin: 0.6rem 0 0 1.3rem;
}

.navBottomRight {
    display: flex;
    margin: 0.6rem 2.2rem 0 0rem;
}

.navBottom .link{
    text-decoration: none;
    color: white;
    margin: 0 0.75rem;
    cursor: pointer;
}

.navBottomRight img {
    padding-bottom: 0.6rem;
    width: 1.1rem;
    height: auto;
    margin-left: 0.5rem;
    cursor: pointer;
}

/* daqui pra frente, estao as partes de animacoes na navbar */

.navBottom .navBottomLeft #home:after {
    color: white;
    content: '______';
    font-size: 18px;
    position: absolute;
    width: 3.4rem;
    transform: scaleX(0);
    height: 1.25rem;
    bottom: 0;
    left: 1.65rem;
    transform-origin: bottom right;
    transition: transform 0.25s ease;
}

.navBottom #home:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
}

.navBottom .navBottomLeft #about:after {
    color: white;
    content: '________';
    font-size: 19px;
    position: absolute;
    max-width: 4.7rem;
    transform: scaleX(0);
    height: 1.3rem;
    bottom: 0;
    left: 5.6rem;
    transform-origin: bottom right;
    transition: transform 0.25s ease;
}

.navBottom #about:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
}

.navBottom .navBottomRight #login:after {
    color: white;
    content: '______';
    font-size: 18px;
    position: absolute;
    width: 3.4rem;
    transform: scaleX(0);
    height: 1.25rem;
    bottom: 0;
    right: 9.3rem;
    transform-origin: bottom right;
    transition: transform 0.25s ease;
}

.navBottom #login:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
}

.navBottom .navBottomRight #register:after {
    color: white;
    content: '________';
    font-size: 19px;
    position: absolute;
    width: 4.7rem;
    transform: scaleX(0);
    height: 1.3rem;
    bottom: 0;
    right: 4.1rem;
    transform-origin: bottom right;
    transition: transform 0.25s ease;
}

.navBottom #register:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
}

.navBottom .navBottomRight #profile:after {
    color: white;
    content: '___';
    font-size: 18px;
    position: absolute;
    width: 1.8rem;
    transform: scaleX(0);
    height: 1.25rem;
    bottom: 0;
    right: 1.8rem;
    transform-origin: bottom right;
    transition: transform 0.25s ease;
}

.navBottom #profile:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
}

.navBottom #profile:active, #home:active, #about:active, #login:active, #register:active {
    color: #F3F3F3;
}


/* .navTopRight .Pesquisar img:hover{
    transform: translateY(-2px);
    transition: 0.25s ease-out;
}

.navTopRight .Pesquisar img:active{
    transform: translateY(2px);
} */

@media only screen  and (min-width: 710px) {
    #iconCarrinho {  
        transition: .5s linear;
        z-index: 1;
        margin: auto
    }
      
    #iconCarrinho::before {  
        content: '';
        position: absolute;
        top: 0.7rem;
        right: 2.1rem;
        width: 2.3rem;
        height: 2.3em;
        border: 1px solid black;
        border-radius: 50%;
        z-index: -1;
        transform: scale(0);
        transition: 0.3s cubic-bezier(.95, .32, .37, 1.21);
    }
        
    #iconCarrinho:hover::before {  
        transform: scale(1);
    }
    
    #iconCarrinho:active::before{
        border: 1px solid #fff;
    }
}


.pesquisarButton {  
    transition: .5s linear;
    z-index: 1;
    margin: auto;
}

/* daqui para baixo fica o código para questão da responsividade */

@media only screen and (max-width: 710px) {
    #about, .navTopRight .Pesquisar {
        display: none;
    }

    .pesquisarButtonResponsive, .Menu {
        margin: 0 0.75rem;
    }

    .navTop {
        padding-right: 1.2rem;
    }

    .navTopRight .pesquisarButtonResponsive {
        display: inherit;
        position: relative;
        height: 1.3rem;
        width: auto;
        cursor: pointer;
        background: transparent;
        border: none;
    }
    
    .navTopRight .pesquisarButtonResponsive img {
        height: 100%;
        width: 100%;
        opacity: 0.6;
    }

    .navTopRight .Menu {
        display: inherit;
        position: relative;
        background: transparent;
        border: none;
        cursor: pointer;
        height: 1.5rem;
        width: auto;
    }

    .navTopRight .Menu img {
        width: 100%;
        height: 100%;
    }

    /* animações para navbar responsiva */
    .navTopRight .pesquisarButtonResponsive img:hover,
    .navTopRight #iconCarrinho img:hover
    {
        transform: translateY(-2px);
        transition: 0.25s ease-out;
    }

    .navTopRight .pesquisarButtonResponsive img:active,
    .navTopRight #iconCarrinho img:active
    {
        transform: translateY(2px);
    }
}

@media only screen and (max-width: 319px) {
    .navTopLeft p{
        display: none;
    }
}
`