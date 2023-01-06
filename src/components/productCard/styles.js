import styled from "styled-components";

export const Container = styled.div`

.productContent {
    height: 17.2rem;
    width: 12rem;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: black;
    font-family: Neucha, sans-serif;
    background-color: white;
    border-radius: 3px;
    outline: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: rgba(0, 0, 0, .2) 16px 20px 9px -19px;

    > img {
        height: 13.5rem;
        width: 100%;
    }

    > h1 {
        font-size: .8rem;
        font-weight: lighter;
        margin: .3rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    > span {
        font-weight: bold;
        margin: 0 .3rem;
    }
}

.productContent:hover {
    outline: 1px solid rgba(0, 0, 0, 0.8);
}

`