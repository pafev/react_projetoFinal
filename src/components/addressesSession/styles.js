import styled from "styled-components";

export const Container = styled.section`
display: flex;
flex-direction: column;
font-family: Neucha, sans-serif;
padding-bottom: 1rem;

.addAddressBtn {
    font-weight: normal;
    background-color: black;
    color: white;
    width: 12rem;
    height: 2.5rem;
    margin: 1.5rem 0 1.5rem 3rem;
    border-radius: 2px;
    font-size: .85rem;
    box-shadow: rgba(0, 0, 0, .2) 15px 18px 15px -18px;
    transition: all 235ms ease-in-out;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
}

.addAddressBtn:hover {
  box-shadow: rgba(0, 0, 0, .3) 2px 8px 8px -5px;
  transform: translateY(1px);
}

.addAddressBtn:focus {
  box-shadow: rgba(0, 0, 0, .3) 2px 8px 8px -6px;
}

ul{
    align-self: center;
    width: 90%;
    max-height: 15rem;
    overflow-y: scroll;

    > li{
        width: 100%;
        height: 5rem;
        margin-bottom: 1rem;
        list-style: none;
        border: 1px solid rgba(0, 0, 0, 0.4);
        border-radius: 2px;
        /* box-shadow: rgba(0, 0, 0, .3) 0px 2px 4px -2px; */
        display: flex;
        justify-content: space-between;
        padding: 0 1rem;

        > .header{
            margin-top: .6rem;
            /* background-color: blue; */
            width: 70%;
            > h1{
                font-size: .9rem;
                font-weight: bold;
                margin-bottom: .1rem;
                border-bottom: 1px solid rgba(0, 0, 0, 0.2);
            }

            > p{
                font-weight: lighter;
                font-size: .85rem;
                color: rgba(0, 0, 0, 0.6);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }

        > .buttons{
            align-self: center;

            > button + button{
                margin-left: .5rem;
            }

            > button{
                font-weight: bolder;
                background: transparent;
                border: none;
                outline: none;
                cursor: pointer;
                transition: all 0.2s ease;
            }

            > button:hover{
                color: rgba(0, 0, 0, 0.6);
            }
        }
    }
}


/* edicao da scrollbar na ul*/
ul::-webkit-scrollbar {
    width: 8px;               /* width of the entire scrollbar */
}

ul::-webkit-scrollbar-track {
    background: white;        /* color of the tracking area */
}

ul::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.5);    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
}
`