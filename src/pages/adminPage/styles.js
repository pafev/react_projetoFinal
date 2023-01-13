import styled from "styled-components";

export const Container = styled.section`
.choices {
    margin: 9rem 0 2.5rem 0;
    display: flex;
    justify-content: space-around;

    > button{
        cursor: pointer;
        width: 9rem;
        height: 6.5rem;
        border: 1px solid rgba(0, 0, 0, 0.2);
        outline: none;
        background-color: white;
        border-radius: 5px;
        box-shadow: rgba(0, 0, 0, .2) 15px 18px 15px -18px;
        transition: all 235ms ease-in-out;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        > .icon {
            font-size: 2.2rem;
            margin-bottom: .6rem;
        }

        > span{
            font-family: Neucha, sans-serif;
            font-weight: bold;
        }
    }

    > button:hover {
        box-shadow: rgba(0, 0, 0, .3) 2px 8px 8px -5px;
        transform: translateY(1px);
    }

    > button:focus {
        box-shadow: rgba(0, 0, 0, .3) 2px 8px 8px -6px;
    }
}
`