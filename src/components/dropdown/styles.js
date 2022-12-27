import styled from "styled-components";

export const Container = styled.div`
#iconDown {
    font-size: 1.1rem;
    margin: 3px 0 0 5px;
}

.dropdownBtn {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: black;
    outline: none;
    color: white;
    cursor: pointer;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 20px;
}

.dropdown {
    height: 3.3rem;
    width: 10rem;
    position: relative;
    display: inline-block;
    margin: 1rem;
}

.dropdown-content {
    display: block;
    position: absolute;
    width: 100%;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: 0.2s ease;
    border-bottom: 4px solid white;
}

#contentShow {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.dropdown-content .item {
    background-color: rgba(0, 0, 0, 0.9);
    color: white;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.dropdown-content .item:hover {color: rgba(255, 255, 255, 0.8)}

.dropdownBtn p {
    display: flex;
    align-items: center;
    position: relative;
    left: 0.3rem;
    margin: 0 auto;
}

@media only screen and (max-width: 894px) {

    button {
        padding: auto 0rem;
        font-size: 14px;
    }

    .dropdown {
        margin: 0rem;
        width: 5.2rem;
    }

    button p {
        display: flex;
        align-items: center;
        margin: 0 auto;
        position: relative;
        left: 0.25rem;
    }
}


`