import styled from "styled-components";

export const Container = styled.div`
#iconDown {
    font-size: 1rem;
    margin: 3px 0 0 5px;
    transition: 0.2s ease;
}

.dropdownBtn {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    /* background-color: black; */
    background-color: white;
    border: 1px solid black;
    /* border-radius: 5px; */
    outline: none;
    font-size: 1rem;
    background-position: 0 90%;
    box-shadow: rgba(0, 0, 0, .2) 15px 18px 15px -18px;
    color: #41403e;
    /* color: white; */
    cursor: pointer;
    font-family: Neucha, sans-serif;
    transition: all 235ms ease-in-out;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
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
    margin-top: 0.2rem;
    border-radius: 5px;
    width: 100%;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: 0.2s ease;
    border: 1px solid black;
    background-color: rgba(255, 255, 255, 0.98);
}

#contentShow {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

#buttonShow #iconDown {
    transform: rotate(-180deg);
}

.dropdown-content .inputPrice {
    font-size: 14px;
    position: relative;
    width: 100%;
    padding: 1rem 0;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    
    > input {
        width: 40%;
        height: 1.8rem;
        padding: 0 0.2rem;
        border-radius: 3px;
        border: 1px solid rgba(0, 0, 0, .3);
        outline: none;
        &:focus{
            border: 1px solid black;
            transition: border 0.35s ease;
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
}

.dropdown-content .applyPrice {
    height: 2.2rem;
    display: flex;
    justify-content: center;

    > button {
        margin: auto 0;
        height: 60%;
        width: 45%;
        border: none;
        outline: none;
        background: transparent;
        cursor: pointer;
        display: flex;

        > span {
            display: flex;
            margin: auto auto;
            align-items: center;
            transition: all .25s ease;

            > #iconConfirm {
                margin-left: 0.2rem;
            }
        }
    }
}

.applyPrice button:active span {
    color: rgba(0, 0, 0, .6);
}


/* .dropdown-content .item {
    background: transparent;
    border-radius: 5px;
    border: none;
    outline: none;
    font-size: 14px;
    cursor: pointer;
    width: 100%;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
} */

/* .dropdown-content .item:hover {color: rgba(255, 255, 255, 0.8)} */

.dropdownBtn p {
    display: flex;
    align-items: center;
    position: relative;
    left: 0.3rem;
    margin: 0 auto;
}

/* animações */

/* .bouncy:hover {
    animation:bouncy 5s linear;
    position:relative;
}
@keyframes bouncy {
    0%{top:0em}
    3%{top:-0.4em}
    6%{top:0em}
    9%{top:-0.2em}
    12%{top:0em}
    50%{top:0em}
    100%{top:0em;}
} */

.dropdownBtn:hover {
  box-shadow: rgba(0, 0, 0, .3) 2px 8px 8px -5px;
  transform: translate3d(0, 2px, 0);
}

.dropdownBtn:focus {
  box-shadow: rgba(0, 0, 0, .3) 2px 8px 4px -6px;
}
`