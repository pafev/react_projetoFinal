import styled from "styled-components";

export const Container = styled.div`
.searchContent {
    position: relative;
    height: 4rem;
    display: flex;
    max-width: 40rem;
    margin: 0 auto;
    padding: 0 1rem;
    top: -2rem;
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
  justify-content: center;
  display: flex;
  position: absolute;
  z-index: 1;
  width: 100%;
  top: 34.8rem;

  > ul {
    width: 100%;
    max-width: 38rem;
    margin: 0 1rem;
    padding: 0 1rem;
    list-style: none;
    background-color: white;
    border-radius: 8px;
    border: 1px solid black;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);

    > li {
      background-color: white;
      padding: 0.5rem 0 0 0.5rem;
      height: 2.2rem;
    }
    > li + li {
      border-top: 1px solid rgba(0,0,0,0.1);
    }
  }

  > .contentShow {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    transition: 0.5s ease;
  }
}

`