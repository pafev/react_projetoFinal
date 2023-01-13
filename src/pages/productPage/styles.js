import styled from "styled-components";

export const Container = styled.section`
margin-top: 7rem;


.nomemarca {
    margin-left: 1rem;
    margin-bottom: 2rem;
}
.productInfo{
    margin-left: 0px;
    display: flex;
    direction: row;
    justify-content: space-between;
    /* width: 17rem; */
}
.productPhoto{
    margin-left: 0px;
    margin-bottom: 1rem;
    display: flex;
    direction: row;
    justify-content: space-between;
    width: 17rem; 
}
.photoMain {
    display:flex;

    img{
        max-height: 10rem;
        max-width: 10rem

    }
}
.photosCascade {
    display:flex;
    margin-left: 2rem;
    flex-direction: column;

    img{
        cursor: pointer;
        height: 4rem;
        width: 4rem;
        margin-right: 1rem;
        border: 1px solid gray;

    }
}

.textoProduto{

    display: flex;
    flex-direction: column;
    margin-left: 3rem;
    margin-right: 2rem;


}
.purchase{
    background-color: #e6e6e6;
    display: flex;
    width: 17rem;
    flex-direction: column;
    align-items: center; 
    /* padding-right: 5rem; */
    justify-content: space-evenly;
    margin-right: 3rem;

    hr {
        width:60%;
        height: 3px ;
    }
    
    
.buyButton{
    color: green;
}
}
.buyQuantity{
    display: flex;
    flex-direction: row;
    width: 80%;
    justify-content: center;
    background-color: white;
    /* border: 1px solid black; */
    border-radius: 10px ;
   
    button {
        width: 35%;
        background-color: black;
        color: white;
        cursor: pointer;
        height: 100%;
        border-radius: 10px 


    }
    .numQuantity{
        
        display: flex;
        width: 30%;
        justify-content: center
    }
}

.productCards{
    display: flex;
    margin-left: 1rem;
    flex-direction: row;
    justify-content: space-evenly;
}

`