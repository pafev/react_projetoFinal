import styled from 'styled-components'

export const Container = styled.header`

nav {
    position: sticky;
}

.navTop {
    background-color: #F3F3F3;
    height: 4.2rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.navTop .navTopLeft {
    display: flex;
    flex-direction: row;
    align-items: center;
    vertical-align: middle;
    margin-left: 1.5rem;
}

.navTop .navTopLeft p {
    font-size: 1.3rem;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.navTop .navTopLeft img {
    position: relative;
    width: 2.1rem;
    height: 2rem;
    margin-right: 0.5rem;
}

.navTop .navTopRight {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 2rem;
}

.navTop .navTopRight img {
    width: 1.8rem;
    height: 1.9rem;
    margin-left: 0.6rem;
}

.navTop .Pesquisar {
    display: flex;
    background-color: white;
    height: 2rem;
    width: 26rem;
    justify-content: space-between;
    padding: 0.5rem;
    border-radius: 2px;
    margin-right: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.5);
}

.navTop .Pesquisar input {
    outline: none;
    border: none;
    width: 100%;
    font-size: 15px;
}

.navTop .Pesquisar img {
    height: 1.1rem;
    width: 1.1rem;
    align-self: center;
    opacity: 0.6;
}

.navBottom {
    color: white;
    background-color: black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 2.6rem;
    font-weight:600;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.navBottomRight {
    display: flex;
    flex-direction: row;
}

.navBottomLeft {
    display: flex;
    flex-direction: row;
    margin: 0.6rem 0 0 1.3rem;
}

.navBottomRight {
    display: flex;
    flex-direction: row;
    margin: 0.6rem 2.2rem 0 0rem;
}

.navBottom p{
    margin: 0 0.5rem;
}

.navBottomRight img {
    width: 1.1rem;
    height: 1.1rem;
    margin-left: 0.5rem;
}

`