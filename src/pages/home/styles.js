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
    /* justify-content: space-around; */
}

// ajustes do dropdown

.filters {
    position: relative;
    top: -2.5rem;
    margin: 0 auto;
    width: 52vw;
    height: 14vh;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: black;
    box-shadow: 0px 3px 9px rgba(0,0,0,0.6);
}

.dropdownBtn {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: black;
    outline: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
    font-family: 'Times New Roman', Times, sans-serif;
    font-weight: bold;
}

.dropdown {
    height: 100%;
    width: 8rem;
    position: relative;
    display: inline-block;
    border-bottom: 3px solid white;
    margin: 0rem 0.8rem;
}

.dropdown-content {
  display: none;
  position: absolute;
  left: -10%;
  background-color: #f9f9f9;
  width: 120%;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

#contentShow {
    display: block;
}

.dropdown-content .item {
    background-color: rgba(0, 0, 0, 0.9);
    color: white;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown-content .item:hover {color: rgba(255, 255, 255, 0.8)}

.dropdownBtn p {
    display: flex;
    align-items: center;
    margin: 0 auto;
    position: relative;
    left: 0.5rem;
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
    height: 20rem;
}

.products p {
    margin: auto auto;
    font-size: 20px;
}
`