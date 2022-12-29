import styled from "styled-components";

export const Container = styled.div`
.inputContent {
    display: flex;
    flex-direction: column;
    width: 18rem;
    font-family: Neucha, sans-serif;
    margin-top: 1.2rem;

    > span {
        color: white;
        font-weight: 500;
    }

    > input {
        font-size: 14px;
        height: 2.2rem;
        padding: 0 0.4rem;
        color: black;
        border: none;
        border-radius: 2px;
        outline: none;
        &:focus{
            &::-webkit-input-placeholder{
                transition: opacity 0.25s ease; 
                opacity: 0;
            }
            &::-moz-placeholder {
                transition: opacity 0.25s ease; 
                opacity: 0;
            }
            &:-ms-placeholder {
                transition: opacity 0.25s ease; 
                opacity: 0;
            }    
        }
    }

    > input::placeholder {
        color: rgba(0, 0, 0, 0.4);
    }
}
`