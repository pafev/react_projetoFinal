import styled from "styled-components";

export const Container = styled.section`
margin-top: 7rem;

.nomemarca {
    margin-left: 1rem;
    margin-bottom: 2rem;
}
.rightArrow{
    margin-top: 1px;
    align-items: center;
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
    margin-bottom: 5rem;
    display: flex;
    direction: row;
    justify-content: space-between;
    width: 30rem; 
    height:17rem;
}
.photoMain {
    /* display:flex; */
    justify-content: center;
    background-color: white;
    

    img{
        max-height: 20rem;
        max-width: 20rem;

    }
}
.photosCascade {
    display:flex;
    margin-left: 2rem;
    flex-direction: column;

    img{
        
        height: 4rem;
        width: 4rem;
        margin-right: 1rem;
        /* border: 1px solid gray; */
        box-shadow: rgba(0, 0, 0, .2) 16px 20px 9px -19px;

        
    }
    img:hover{
        cursor: pointer;

        outline: 1px solid rgba(0, 0, 0, 0.8);

    }
}


.textoProduto{
    font-family: Neucha, sans-serif;
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    margin-right: 2rem;
    width: 15% ;

    p{
       margin-top:1rem 
    }

    h1{
        display: flex;
        flex-direction: row
    }
    h4{
        font-size: 10px;
        font-weight: lighter;
        color: #595959 
    }


}
.purchase{
    border-radius: 15px ;
    background-color: #e6e6e6;
    display: flex;
    width: 17rem;
    flex-direction: column;
    align-items: center; 
    /* padding-right: 5rem; */
    justify-content: space-evenly;
    margin-right: 3rem;
    margin-bottom: 3rem;
    font-family: Neucha, sans-serif;

    p {
        align-items: center;
    }

    hr {
        width:60%;
        
    }
    
}    
.buyButton{
    
    height:4rem;
    justify-content: space-evenly;
    display: flex;
    flex-direction: column;
    button {
        width: 100%;
        margin-bottom: 5px;
        cursor: pointer;
        height: 100%;
    
        border-radius: 10px; 
    }
    #buy{
        background-color: green;
        color: white;

    }
    #cart {
        background-color: black;
        color: white; 

    }
}

.buyQuantity{
    margin-top:2px;
    display: flex;
    flex-direction: row;
    width: 7rem;
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
.brandProducts{
    margin-left: 1rem;
    font-family: Neucha, sans-serif;
}
.productCards{
    display: flex;
    margin-left: 1rem;
    margin-bottom: 1rem;
    flex-direction: row;
    justify-content: space-evenly;
}
`