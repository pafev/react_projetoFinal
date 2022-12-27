import styled from "styled-components";

export const Container = styled.div`
.filters {
    position: relative;
    width: 18vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 3rem;
}

@media only screen and (max-width: 894px) {
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
}

.productsContent {
    margin: 3rem auto;
    font-size: 20px;
}
`