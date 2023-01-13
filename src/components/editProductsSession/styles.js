import styled from "styled-components";

export const Container = styled.section`
.searchContent {
    position: relative;
    height: 4rem;
    display: flex;
    max-width: 40rem;
    margin: 2rem auto;
    padding: 0 1rem;
    flex-direction: column;
}

.searchContent input {
    font-size: 14px;
    position: relative;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    padding: 0 2.2rem;
    border-radius: 1rem;
    border: 1px solid #D0CFCE;    
    outline: none;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    &:focus{
    border: 1px solid black;
    transition: border 0.35s ease;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.3);
    &::-webkit-input-placeholder{
      transition: opacity 0.45s ease; 
  	  opacity: 0;
     }
    &::-moz-placeholder {
      transition: opacity 0.45s ease; 
  	  opacity: 0;
     }
    &:-ms-placeholder {
     transition: opacity 0.45s ease; 
  	 opacity: 0;
     }    
   }
}

.searchContent .iconSearch {
    position: absolute;
    right: 2rem;
    top: 36%;
    font-size: 1.05rem;
}

.searchedProducts {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > .addItem {
        cursor: pointer;
        height: 3rem;
        width: 17rem;
        background-color: black;
        color: white;
        margin: 1rem 0 2rem 0;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 235ms ease-in-out;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;

        > .iconAdd{
            font-size: 1.2rem;
            margin-right: 0.3rem;
        }
    }

    > .addItem:hover {
        border: 1px solid white;
    }

    > .addItem:focus {
        transform: translateY(1px);
    }

    > ul {
        margin-bottom: 4rem;
        background-color: white;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 7px;
        width: 90%;
        max-width: 50rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        list-style: none;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    }
}

ul::-webkit-scrollbar {
    width: 9px;               /* width of the entire scrollbar */
}

ul::-webkit-scrollbar-track {
    background: white;        /* color of the tracking area */
}

ul::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.5);    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
}
`