import styled from 'styled-components'

export const Container = styled.header`
overflow: hidden;
z-index: 1;

.navTop {
    display: flex;
    align-items: center;
    box-shadow: 0px 2px 7px rgba(0,0,0,0.5);
    z-index: 2;
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
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
    height: 53%;
    text-decoration: none;
    color: black;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: lighter;
    font-size: 1.2rem;
}

.navTopRight .contentCarrinho {
    display: flex;
    align-items: center;
}

.navTopRight .iconCarrinho {
    font-size: 1.6rem;
}

.navTopRight p {
    margin: 0 0.6rem;
}

#hiddenNav {
    top: 1.65rem;
}

.navBottom {
    z-index: 1;
    position: fixed;
    top: 4.2rem;
    width: 100%;
    color: white;
    background-color: black;
    display: flex;
    justify-content: space-between;
    height: 2.5rem;
    font-weight:600;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: lighter;
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

/* daqui pra frente, estao as partes de animacoes na navbar */

.navBottom .navBottomLeft #home:after {
    color: white;
    content: '______';
    font-size: 18px;
    position: absolute;
    bottom: -0.2rem;
    left: 1.58rem;
    transform: scaleX(0);
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
    font-size: 18px;
    position: absolute;
    bottom: -0.2rem;
    left: 5.65rem;
    transform: scaleX(0);
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
    bottom: -0.2rem;
    right: 9.5rem;
    transform: scaleX(0);
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
    bottom: -0.2rem;
    right: 4.05rem;
    transform: scaleX(0);
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
    transform: scaleX(0);
    bottom: -0.2rem;
    right: 1.9rem;
    transform-origin: bottom right;
    transition: transform 0.25s ease;
}

.navBottom #profile:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
}

.navBottom #profile:active, #home:active, #about:active, #login:active, #register:active {
    opacity: 0.92;
}

@media only screen  and (min-width: 710px) {
    .navTopRight .contentCarrinho { 
        transition: .5s linear;
        z-index: 1;
        margin: auto;
    }

    .navTopRight .iconCarrinho:active {
        height: 1.5rem;
        transition: .2s ease;
    }
      
    .navTopRight .contentCarrinho::before {  
        content: '';
        position: absolute;
        right: 7.9rem;
        width: 2rem;
        height: 1.7em;
        border: 1px solid black;
        border-radius: 50%;
        z-index: -1;
        transform: scale(0);
        transition: 0.3s cubic-bezier(.95, .32, .37, 1.21);
    }
        
    .navTopRight .contentCarrinho:hover::before {  
        transform: scale(1);
    }
    
    .navTopRight .contentCarrinho:active::before{
        border: 1px solid #fff;
    }
}


/* daqui para baixo fica o código para questão da responsividade */

@media only screen and (max-width: 710px) {
    #about, .navTopRight p {
        display: none;
    }

    .navTop {
        padding-right: 1.2rem;
    }
    /* animações para navbar responsiva */
    .navTopRight .iconCarrinho:hover {
        transform: translateY(-2px);
        transition: 0.25s ease-out;
    }

    .navTopRight .iconCarrinho:active {
        transform: translateY(2px);
    }
}

@media only screen and (max-width: 319px) {
    .navTopLeft p{
        display: none;
    }

    .navBottomLeft {
        margin-left: 0.5rem;
    }

    .navTop {
        padding-left: 1.4rem;
    }

    .navBottom .navBottomLeft #home:after {
        left: 0.7rem
    }
}
`