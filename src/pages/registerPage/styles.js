import styled from "styled-components";
import backLogin from '../../assets/background-login-register.jpg'

export const Container = styled.section`
background-image: url(${backLogin});
background-size: 100%;
background-repeat: no-repeat;
background-position-y: 30%;
width: 100vw;
height: 150vh;
display: flex;
justify-content: center;
align-items: center;

.content {
    position: relative;
    background-color: rgba(0, 0, 0, 0.3);
    height: 33rem;
    width: 24rem;
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;

    > .icon {
        font-size: 75px;
        position: relative;
        margin: 0 auto;
        top: -2.7rem;
        color: white;
    }

    > .inputData {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        top: -1.3rem;

        > .inputContent {
            display: flex;
            flex-direction: column;
            width: 75%;
            font-family: Neucha, sans-serif;

            > span {
                color: white;
                font-weight: 500;
            }

            > input {
                font-size: 14px;
                height: 2.2rem;
                padding: 0 0.4rem;
                color: #818489;
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
        }

        > .inputContent + .inputContent {
            margin-top: 1.2rem;
        }
    }

    > .buttons {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 2rem;
        font-family: Neucha, sans-serif;

        > button {
            position: relative;
            height: 2.8rem;
            width: 13rem;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: white;
            outline: none;
            border: none;
            border-radius: 5px;
            font-size: 1.2rem;
            font-weight: bold;
            background-position: 0 90%;
            box-shadow: rgba(0, 0, 0, .2) 15px 28px 25px -18px;
            color: #41403e;
            cursor: pointer;
            transition: all 235ms ease-in-out;
            user-select: none;
            -webkit-user-select: none;
            touch-action: manipulation;
        }

        > button:hover {
            box-shadow: rgba(0, 0, 0, .3) 2px 8px 8px -5px;
            transform: translateY(1px);
        }

        > button:focus {
            box-shadow: rgba(0, 0, 0, .3) 2px 8px 4px -6px;
        }

        > button:active {
            transform: translateY(2px);
        }

        > .register {
            font-weight: lighter;
            margin-top: 1.2rem;
            color: white;
            font-style: italic;
        }
    }
}
`