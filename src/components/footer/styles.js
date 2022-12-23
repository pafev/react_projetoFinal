import styled from "styled-components";

export const Container = styled.footer`

margin-top: 2.5rem;
display: flex;
justify-content: space-between;
width: 100%;
height: 6.5rem;
max-height: 7rem;
background-color: black;
color: white;
font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-weight: bold;


.email {
    font-weight: 100;
}

div{
    width: 15rem;
    margin: 1rem;
}

.footerMid {
    width: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.footerLeft {
    position: relative;
    top: 0.3rem;
}

.footerLeft a {
    text-decoration: none;
    color: white;
}

.footerRight {
    position: relative;
    top: 0.8rem;
}

.footerRight img {
    width: 1.3rem;
    height: auto;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
    align-items: center;
    display: flex;
    flex-direction: column;
}

.footerMid h1 {
    font-size: 16px;
    position: relative;
    top: 1.1rem;
}

@media only screen and (max-width: 560px) {
    .footerLeft {
        display: none;
    }

    div {
        margin: 0;
    }

    .footerMid {
        margin-bottom: 1rem;
    }

    
    align-items: center;
    flex-direction: column-reverse;
    justify-content: center;
    

    .footerMid h1 {
        font-size: 14px;
    }
}

`