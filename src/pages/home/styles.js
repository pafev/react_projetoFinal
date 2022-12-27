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

.exhibition .searchContent {
    position: relative;
    top: -2.15rem;
    width: 58vw;
    height: 4.3rem;
    border: 2px solid black;
    border-radius: 1rem;
    background-color: white;
    display: flex;
    align-items: center;
    margin: 0 auto;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.3);
}

.exhibition input {
    width: 90%;
    height: 50%;
    outline: none;
    border: none;
    background-color: inherit;
    margin: 0 auto;
    font-size: 0.9rem;
}

.searchContent .iconSearch {
    position: absolute;
    right: 4%;
    font-size: 1.05rem;
}

// ajustes do dropdown

.filters {
    position: relative;
    width: 18vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 3rem;
}

.dropdownBtn {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: black;
    outline: none;
    color: white;
    cursor: pointer;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 20px;
}

.dropdown {
    height: 3.3rem;
    width: 10rem;
    position: relative;
    display: inline-block;
    margin: 1rem;
}

.dropdown-content {
    display: block;
    position: absolute;
    width: 100%;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: 0.2s ease;
    border-bottom: 4px solid white;
}

#contentShow {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.dropdown-content .item {
    background-color: rgba(0, 0, 0, 0.9);
    color: white;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.dropdown-content .item:hover {color: rgba(255, 255, 255, 0.8)}

.dropdownBtn p {
    display: flex;
    align-items: center;
    position: relative;
    left: 0.3rem;
}

// parte da responsividade do welcome e dos filtros

@media only screen and (max-width: 894px) {
    .welcome div {
        margin-right: 0rem;
    }

    .welcome div h1 {
        font-size: 36px;
    }

    .filters {
        padding: 0 0.5rem;
        position: relative;
        top: -2rem;
        margin: 0 auto;
        width: 90vw;
        height: 10vh;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        background-color: black;
        box-shadow: 0px 3px 9px rgba(0,0,0,0.6);
    }

    .filters button {
        padding: auto 0rem;
        font-size: 14px;
    }

    .filters .dropdown {
        margin: 0rem;
        width: 5.2rem;
    }

    .filters button p {
        display: flex;
        align-items: center;
        margin: 0 auto;
        position: relative;
        left: 0.25rem;
    }

    .filters img {
        height: 1.2rem;
    }
}

.products {
    display: flex;
}

.products .productsContent {
    margin: 3rem auto;
    font-size: 20px;
}
`