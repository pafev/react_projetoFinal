import styled from "styled-components";

export const Container = styled.div`
display: flex;

.filters {
    margin-left: 0.3rem;
    position: relative;
    width: 18vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 3rem;
}

h1 {
    display: flex;
    align-items: center;
    /* background-color: blue; */
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    position: relative;
    top: -1rem;
    padding-left: 1rem;
    font-family: Neucha, sans-serif;
    width: 100%;
    height: 2rem;

    > #iconFilter {
        margin-right: 3px;
    }
}

.productsContent {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 3rem auto;
    font-size: 20px;
}

.clear {
    margin-top: 1.5rem;
    font-size: 12px;
    font-family: Neucha, sans-serif;
    border: 1px solid black;
    box-shadow: rgba(0, 0, 0, .2) 15px 28px 25px -18px;
    outline: none;
    color: white;
    background-color: black;
    height: 3rem;
    width: 6rem;
    cursor: pointer;
    transition: all 235ms ease-in-out;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
}

.clear:hover {
    box-shadow: rgba(0, 0, 0, .3) 2px 8px 8px -5px;
    transform: translate3d(0, 2px, 0);
}

.clear:focus {
    box-shadow: rgba(0, 0, 0, .3) 2px 8px 4px -6px;
}

/* .clear {
    margin-top: 1.5rem;
	pointer-events: auto;
	cursor: pointer;
    border: none;
	border: 1px solid;
	padding: 0 2rem;
	font-family: inherit;
	font-size: 14px;
	position: relative;
	display: inline-block;
}

.clear::before,
.clear::after {
	position: absolute;
	top: 0;
	left: 10%;
	width: 100%;
	height: 100%;
}

.clear {
    font-family: Neucha, sans-serif;
	font-style: normal;
	width: 3rem;
	height: 3rem;
	color: red;
	background: none;
    display: flex;
    justify-content: center;
}

.clear::before {
	content: '';
	z-index: -1;
    height: 100%;
    width: 80%;
	-webkit-clip-path: polygon(20% 30%, 0 30%, 0 50%, 0 70%, 20% 70%, 50% 70%, 80% 70%, 100% 70%, 100% 50%, 100% 30%, 80% 30%, 50% 30%);
	clip-path: polygon(20% 30%, 0 30%, 0 50%, 0 70%, 20% 70%, 50% 70%, 80% 70%, 100% 70%, 100% 50%, 100% 30%, 80% 30%, 50% 30%);
	transition: clip-path 0.4s cubic-bezier(0.3, 1, 0.2, 1), -webkit-clip-path 0.4s cubic-bezier(0.3, 1, 0.2, 1), transform 0.4s cubic-bezier(0.3, 1, 0.2, 1), background 0.4s ease;
}

.clear:hover::before {
	background: red;
	transform: scale3d(0.7,0.7,1);
	-webkit-clip-path: polygon(30% 10%, 10% 30%, 30% 50%, 10% 70%, 30% 90%, 50% 70%, 70% 90%, 90% 70%, 70% 50%, 90% 30%, 70% 10%, 50% 30%);
	clip-path: polygon(30% 10%, 10% 30%, 30% 50%, 10% 70%, 30% 90%, 50% 70%, 70% 90%, 90% 70%, 70% 50%, 90% 30%, 70% 10%, 50% 30%);
}

.clear span {
    width: 4rem;
    margin: auto 0;
	display: block;
	transition: transform 0.4s cubic-bezier(0.3, 1, 0.2, 1), opacity 0.05s;
}

.clear:hover span {
	transform: scale3d(0.1,0.1,1);
	opacity: 0;
	transition-delay: 0s, 0.35s;
} */
`