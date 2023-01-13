import styled from "styled-components";

export const Container = styled.section`
margin-top: 7.1rem;
font-family: Neucha, sans-serif;

.nomemarca {
    font-size: 1rem;
    font-weight: bold;
    margin: 0 0 2rem 1rem;
    display: flex;
    align-items: center;
    > .rightArrow{
        font-size: 1.2rem;
    }
}

.productInfo{
    display: flex;
    justify-content: space-between;
    > .productPhoto{
        margin-bottom: 5rem;
        display: flex; 
        height:24rem;
        > .photosCascade {
            margin-left: 2rem;
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            > div{
                height: 25%;
                > img{    
                    height: 4rem;
                    width: 4rem;
                    margin-right: 1rem;
                    box-shadow: rgba(0, 0, 0, .2) 16px 20px 9px -19px;   
                }
                > img:hover{
                    cursor: pointer;
                    outline: 1px solid rgba(0, 0, 0, 0.8);
                }
            }      
        }
        > .photoMain {
            height: 24rem;
            width: 24rem;
            margin-left: 3rem;
            display: flex;
            justify-content: center;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            border: 1px solid rgba(0, 0, 0, .3);
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        }
    }
    > .textoProduto{
    display: flex;
    flex-direction: column;
    width: 20rem;
        > h1{
            margin-top: .1rem;
        }
        > h2 {
            font-size: 12px;
            font-weight: lighter;
            color: #595959;
            margin-bottom: 2rem;
            border-bottom: 1px solid rgba(0, 0, 0, .2);
        }
        > p {
            height: calc(1.195rem * 4);
            font-size: 1rem;
            font-weight: lighter;
            color: rgba(0, 0, 0, 0.47);
            display: -webkit-box;
            -webkit-line-clamp: 4; /** número de linhas que você quer exibir */
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
    > .purchase{
        /* align-self: center; */
        /* margin-top: 2rem; */
        position: relative;
        top: .2rem;
        border-radius: 5px;
        background-color: #e6e6e6;
        /* background-color: white; */
        display: flex;
        width: 17rem;
        height: 23rem;
        flex-direction: column;
        /* align-items: center;  */
        justify-content: space-evenly;
        margin: 0 3rem 3rem 0;
        font-family: Neucha, sans-serif;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        border: 1px solid rgba(0, 0, 0, .1);

        > .price {
            margin-left: 1.8rem;
            border-bottom: 1px solid rgba(0, 0, 0, .2);
        }

        > .stock {
            width: 100%;
            align-self: center;
            display: flex;
            justify-content: center;
            border-bottom: 1px solid rgba(0, 0, 0, .2);
            box-shadow: rgba(0, 0, 0, .3) 0px 2px 4px -2px;
            padding-bottom: 1rem;
            font-size: .95rem;
        }

        > hr {
            align-self: center;
            width:60%;
        }

        > p {
            align-self: center;
        }
        

        >.buyQuantity{
            display: flex;
            align-items: center;
            align-self: center;
            width: 7rem;
            background-color: white;
            outline: 1.5px solid black;
            border-radius: 3px;
        
            > button {
                width: 35%;
                background-color: black;
                color: white;
                cursor: pointer;
                height: 100%;
                border-radius: 3px;
            }
            > .numQuantity{ 
                display: flex;
                width: 30%;
                justify-content: center;
            }
        }

        > .buyButton{   
            align-self: center;
            margin: 1.8rem 0;
            height: 4rem;
            justify-content: space-evenly;
            display: flex;
            flex-direction: column;

            > button {
                width: 10.5rem;
                padding: 0.7rem 0;
                cursor: pointer;
                border-radius: 3px; 
                border: none;
                outline: none;
                transition: all 235ms ease-in-out;
                user-select: none;
                -webkit-user-select: none;
                touch-action: manipulation;
            }

            > button:hover {
                transform: scale(1.05);
            }

            > button:hover:active {
                transform: scale(1.05) translateY(.125rem);
            }

            > button:active {
                transform: translateY(.125rem);
            }

            > button + button {
                margin-top: 1.2rem;
            }

            > #buy{
                background-color: green;
                color: white;
            }
            > #cart {
                background-color: black;
                color: white; 
            }
        }   
    }  
}

.brandProducts{
    border-top: 1px solid rgba(0, 0, 0, .3);
    display: flex;
    flex-direction: column;
    > h1 {
        font-size: 1.3rem;
        z-index: 1;
        position: relative;
        align-self: center;
        top: -0.9rem;
        background-color: #EDEDEF;
        padding: 0 0.2rem;
        margin-bottom: 2rem;
    }

    > .productCards{
        display: flex;
        margin-left: 1rem;
        margin-bottom: 1rem;
        flex-direction: row;
        justify-content: space-evenly;
        margin-bottom: 4rem;
    }
}
`