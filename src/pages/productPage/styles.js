import styled from "styled-components";

export const Container = styled.section`
margin-top: 6.5rem;
font-family: Neucha, sans-serif;

.nomemarca {
    position: relative;
    font-size: 1rem;
    font-weight: bold;
    top: 0.8rem;
    margin: 0 0 2rem 1rem;
    display: flex;
    align-items: center;
    > .rightArrow{
        font-size: 1.2rem;
    }
}

.productInfo{
    display: flex;
    justify-content: space-around;
    > .productPhoto{
        margin-bottom: 5rem;
        display: flex; 
        height:24rem;
        > .photosCascade {
            margin-left: 1rem;
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
                    outline: 1px solid rgba(0, 0, 0, .2);
                }
                > img:hover{
                    cursor: pointer;
                    outline: 1px solid rgba(0, 0, 0, 0.8);
                }
            }      
        }
    }
    > .contentRight {
        width: 65rem;
        display: flex;
        justify-content: space-between;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        /* outline: 1px solid rgba(0, 0, 0, .1); */
        background-color: #e6e6e6;
        height: 24rem;
        border-radius: 5px;
        background-color: white;
        outline: 1px solid rgba(0, 0, 0, .3);
   
        > .photoMain {
            height: 24rem;
            width: 24rem;
            display: flex;
            justify-content: center;
            /* border: 1px solid rgba(0, 0, 0, .3); */
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            border-radius: 3px;
            /* background-color: white; */
    
            > img {
                width: 24rem;
                overflow: auto;
            }
        }
        > .textoProduto{
        margin: 1rem 0 1rem 1rem;
        display: flex;
        flex-direction: column;
        width: 20rem;
        padding-right: .5rem;
        border-right: 1px solid rgba(0, 0, 0, .2);
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
                height: calc(1.09rem * 3);
                font-size: 0.9rem;
                font-weight: lighter;
                color: rgba(0, 0, 0, 0.47);
                display: -webkit-box;
                -webkit-line-clamp: 3; /** número de linhas que você quer exibir */
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
        > .purchase{          
            position: relative;
            display: flex;
            width: 30rem;
            height: 23rem;
            flex-direction: column;
            justify-content: space-evenly;
            font-family: Neucha, sans-serif;
    
            > .price {
                margin-left: 1.8rem;
                border-bottom: 1px solid rgba(0, 0, 0, .2);
            }
    
            > .stock {
                width: 100%;
                /* align-self: center; */
                display: flex;
                /* justify-content: center; */
                border-bottom: 1px solid rgba(0, 0, 0, .2);
                box-shadow: rgba(0, 0, 0, .3) 0px 2px 4px -2px;
                padding-bottom: 1rem;
                font-size: .95rem;
    
                > p {
                    margin-left: 1.8rem;
                }
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
                width: 6rem;
                outline: 1px solid rgba(0, 0, 0, .3);
                padding: 0.3rem 0;
                border-radius: 1px;
                color: black;
            
                > button {
                    width: 35%;
                    background: transparent;
                    cursor: pointer;
                    height: 100%;
                    border-radius: 3px;
                    border: none;
                    outline: none;
                    align-items: center;
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
                    width: 14rem;
                    padding: 0.7rem 0;
                    cursor: pointer;
                    border-radius: 2px; 
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

}

.brandProducts{
    border-top: 2px solid rgba(0, 0, 0, .5);
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