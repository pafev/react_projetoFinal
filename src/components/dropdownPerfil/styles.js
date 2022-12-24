import styled from "styled-components";

export const Container = styled.div`
img {
    padding-bottom: 0.6rem;
    width: 1.1rem;
    height: auto;
    margin-left: 0.5rem;
    cursor: pointer;
}

.dropdown-content {
    position: absolute;
    top: 3rem;
    right: 2rem;
    background-color: white;
    border-radius: 8px;
    padding: 0.5rem 1rem;
    width: 10rem;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
}

.dropdown-content h1 {
    color: black;
    font-size: 16px;
    height: 2rem;
}

.dropdown-content::before {
    content: '';
    position: absolute;
    top: -5px;
    right: 0.5rem;
    height: 0.8rem;
    width: 0.8rem;
    background: white;
    transform: rotate(45deg);
}

.dropdown-content .item {
    border-top: 1px solid rgba(0,0,0,0.1);
    color: black;
    text-decoration: none;
    height: 1.6rem;
}

#contentShow {
    display: flex;
    flex-direction: column;
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    transition: 0.5s ease;
}

.dropdownBtn {
    background-color: black;
    border: none;
    outline: none;
}

.dropdownBtn p {
    display: flex;
    align-items: center;
}
`