import styled from "styled-components";

export const Container = styled.div`
.searchContent {
    position: relative;
    top: -2.15rem;
    margin: 0 auto;
    width: 58vw;
    height: 4.3rem;
    border: 2px solid black;
    border-radius: 1rem;
    background-color: white;
    display: flex;
    align-items: center;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.3);
}

input {
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
`