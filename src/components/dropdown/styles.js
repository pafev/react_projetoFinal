import styled from "styled-components";

export const Container = styled.div`
img {
    height: 2rem;
}

.dropdownBtn {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: black;
    outline: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
    font-family: 'Times New Roman', Times, sans-serif;
    font-weight: bold;
}

.dropdown {
    height: 100%;
    width: 8rem;
    position: relative;
    display: inline-block;
    border-bottom: 3px solid white;
    margin: 0rem 0.8rem;
}

.dropdown-content {
  display: none;
  position: absolute;
  left: -10%;
  background-color: #f9f9f9;
  width: 120%;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

#contentShow {
    display: block;
}

.dropdown-content .item {
    background-color: rgba(0, 0, 0, 0.9);
    color: white;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown-content .item:hover {color: rgba(255, 255, 255, 0.8)}

.dropdownBtn p {
    display: flex;
    align-items: center;
    margin: 0 auto;
    position: relative;
    left: 0.5rem;
}
`