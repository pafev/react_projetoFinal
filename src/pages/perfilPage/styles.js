import styled from "styled-components";
import backgroundPerfil from '../../assets/back-perfil1.jpg'

export const Container = styled.section`
display: flex;
min-height: 30rem;
padding-top: 4rem;

.imageBackground {
    z-index: -1;
    position: absolute;
    width: 100vw;
    height: 16rem;
    background-image: url(${backgroundPerfil});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    box-shadow: rgba(0, 0, 0, .3) 2px 8px 8px -6px;
}

.content {
    /* margin: 11rem 2rem 2rem 2rem; */
    margin: 8rem 2rem 2rem 2rem;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, .3) 2px 8px 8px -6px;
    width: 66%;
    > .header {
        height: 8rem;
        /* border-bottom: 1px solid rgba(0, 0, 0, 0.2); */
        box-shadow: rgba(0, 0, 0, .3) 0px 2px 4px -2px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        > h1 {
            font-family: Neucha, sans-serif;
            font-size: 1.5rem;
            margin: 2.1rem 0 0 2rem;
            border-bottom: 1px solid rgba(0, 0, 0, .2);
        }

        > .choices {
            display: flex;
            margin: 0 1.5rem;
            
            > button + button {
                margin-left: 1.2rem;
            }
            
            > button {
                /* background-color: blue; */
                display: flex;
                flex-direction: column;
                align-items: center;
                height: 1.5rem;
                cursor: pointer;
                padding-bottom: .3rem;
                border: none;
                outline: none;
                background: transparent;
                font-size: 1rem;
            }

            > button:after {
                color: black;
                content: '_____';
                /* background-color: blue; */
                font-size: 32px;
                /* position: relative; */
                position: absolute;
                line-height: 0.9rem;
                /* left: 0; */
                /* top: 23.7rem;
                left: 22.4rem; */
                transform: scaleX(0);
                transform-origin: bottom right;
                transition: transform 0.25s ease;
            }

            > button:hover:after {
                transform: scaleX(1);
                transform-origin: bottom left;
            }
        }
    }
}
`