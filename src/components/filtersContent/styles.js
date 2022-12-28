import styled from "styled-components";

export const Container = styled.div`
display: flex;

.filters {
    margin-left: 0.3rem;
    position: relative;
    width: 18vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 3rem;
}

.productsContent {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 3rem auto;
    font-size: 20px;
}

.clear {
    margin-top: 1.5rem;
    font-size: 12px;
    font-family: Neucha, sans-serif;
    border: 1px solid white;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, .2);
    outline: none;
    color: white;
    background-color: black;
    height: 3rem;
    width: 6rem;
    cursor: pointer;
}
`