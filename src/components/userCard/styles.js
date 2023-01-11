import styled from "styled-components";

export const Container = styled.section`
background-color: white;
border: 1px solid rgba(0, 0, 0, 0.3);
border-radius: 3px;
box-shadow: rgba(0, 0, 0, .3) 2px 8px 8px -6px;
width: 14rem;
height: 21rem;
/* margin: 8rem 2rem 2rem 3rem; */
margin: 6rem 2rem 2rem 3rem;
display: flex;
flex-direction: column;
font-family: Neucha, sans-serif;

div {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 16rem;
    border-bottom: 1px solid #AAA;
    box-shadow: rgba(0, 0, 0, .3) 0px 6px 6px -5px;

    > img {
        height: 100%;
        width: 100%;
    }
    
    > input[type='file'] {
        display: none;
    }

    > label {
        z-index: 2;
        font-size: .8rem;
        position: absolute;
        margin: 13.5rem 0 0 0.8rem;
        cursor: pointer;
        background-color: black;
        color: white;
        display: flex;
        align-items: center;
        justify-content: space-around;
        border: 1px solid #222;
        outline: none;
        border-radius: 3px;
        width: 5.9rem;
        height: 1.8rem;
        box-shadow: rgba(0, 0, 0, .3) 15px 18px 19px -18px;
        transition: all 235ms ease-in-out;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
    }

    /* > button:hover {
        box-shadow: rgba(0, 0, 0, .3) 2px 8px 8px -5px;
        transform: translateY(1px);
    }

    > button:focus {
        box-shadow: rgba(0, 0, 0, .3) 2px 8px 4px -6px;
    } */
}



h1 {
    font-size: 1.3rem;
    margin: 1.3rem 0 0 0.8rem;
    border-bottom: 1px solid #999;
    /* width: 90%; */
}

h2 {
    /* width: 90%; */
    margin: 0.2rem 0 0 0.8rem;
    font-size: 0.85rem;
    font-weight: lighter;
    color: #777;
}

`