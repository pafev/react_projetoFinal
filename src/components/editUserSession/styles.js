import styled from "styled-components";

export const Container = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 1.4rem 0 1.8rem 0;
div {
    display: flex;
    justify-content: space-between;
    padding: .7rem 1rem;
    width: 80%;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 2px;
    margin: 1rem;
    font-family: Neucha, sans-serif;
    font-size: .9rem;
    > p{
        display: flex;
        align-items: center;

        > .icon{
            cursor: pointer;
            margin: 0 .2rem;
        }
    }
    > span{
        color: rgba(0,0,0,0.35);
    }
}

/* CSS */
button {
    margin: 1rem 0;
    background: #fff;
    border-radius: .375rem;
    border: .125rem solid black;
    color: #212121;
    cursor: pointer;
    font-family: Circular,Helvetica,sans-serif;
    font-size: 1.125rem;
    font-weight: 700;
    padding: .9rem 1.125rem;
    text-decoration: none;
    transform: translateZ(0) scale(1);
    transition: transform .2s;
}

button:hover {
    transform: scale(1.05);
}

button:hover:active {
    transform: scale(1.05) translateY(.125rem);
}

button:active {
    transform: translateY(.125rem);
}
`