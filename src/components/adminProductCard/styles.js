import styled from "styled-components";

export const Container = styled.ul`
font-family: Neucha, sans-serif;
height: 5rem;
width: 95%;
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid rgba(0, 0, 0, 0.2);

h1 {
    margin-left: 0.8rem;
}

.crud{
    display: flex;
    > .dropdown{
        display: flex;
        flex-direction: column;
        align-items: center;

        > button {
            cursor: pointer;
            background: transparent;
            border: none;
            outline: none;
            font-weight: bold;
            padding: 0 0.5rem;
            display: flex;
            align-items: center;

            > .icon {
                margin-left: 0.1rem;
            }

            > #iconDown {
                transition: all 235ms ease-in-out;
                transform: rotate(-180deg);
            }
        }

        > ul{
            background-color: rgba(0, 0, 0, 0.8);
            box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
            border-radius: 3px;
            border: 1px solid rgba(255, 255, 255, 0.4);
            position: absolute;
            margin-top: 1.1rem;
            list-style: none;
            z-index: 1;
            opacity: 0;
            visibility: hidden;
            transform: translateY(-20px);
            transition: 0.2s ease;

            > li + li {
                border-top: 1px solid rgba(255, 255, 255, 0.4);
            }

            > li {
                cursor: pointer;
                color: white;
                height: 2rem;
                display: flex;
                align-items: center;
                padding: 0 0.5rem;
                transition: all 0.15s ease;
                &:active {
                    color: rgba(0, 0, 0, .6);
                }
            }

            > li:hover {
                color: rgba(255, 255, 255, 0.9);
            }
        }

        > #editShow{
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }
    }

    > button {
        padding: 0 0.5rem;
        cursor: pointer;
        font-weight: bold;
        border: none;
        border-left: 1px solid rgba(0, 0, 0, 0.2);
        outline: none;
        background: transparent;
    }
}


`