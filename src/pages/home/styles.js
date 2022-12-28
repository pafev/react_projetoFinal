import styled from "styled-components";
import backHomepage from '../../assets/back-homepage.jpg'

export const Container = styled.section`
@import url('https://fonts.cdnfonts.com/css/jomolhari');

.welcome {
    background-image: url(${backHomepage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-bottom: 3px solid black;
    width: 100vw;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.welcome div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
    margin: 2rem 1rem 0rem 0rem;
    height: 8rem;
    width: 43rem;
    background-color: rgba(0,0,0,0.7);
}

.welcome div h1 {
    font-family: 'Jomolhari', sans-serif;
    font-weight: lighter;
    font-size: 44px;
    color: white;
    position: relative;
}

.exhibition {
    display: flex;
    flex-direction: column;
}

// parte da responsividade do welcome e dos filtros

@media only screen and (max-width: 894px) {
    .welcome div {
        margin-right: 0rem;
    }

    .welcome div h1 {
        font-size: 36px;
    }
}
`