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
    justify-content: space-between;
    padding: 0 2.5rem 0 2rem;
}

.navTopLeft {
    text-decoration: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: black;
}

.navTopLeft img {
    width: 2.1rem;
    height: 2rem;
    margin-right: 0.3rem;
}

.navTopRight {
    display: flex;
    align-items: center;
}

.navTopRight img {
    cursor: pointer;
    width: 1.8rem;
    height: 1.9rem;
    margin-left: 0.6rem;
}

.navTopRight .Pesquisar {
    display: flex;
    background-color: white;
    height: 2.1rem;
    width: 26rem;
    justify-content: space-between;
    padding: 0.5rem;
    border-radius: 2px;
    margin-right: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.3);
}

.navTopRight .Pesquisar input {
    outline: none;
    border: none;
    width: 100%;
    font-size: 15px;
}

.navTopRight .Pesquisar img {
    height: 1.1rem;
    width: 1.1rem;
    align-self: center;
    opacity: 0.6;
}

.navBottom {
    text-decoratiion: none;
    color: white;
    background-color: black;
    display: flex;
    justify-content: space-between;
    height: 2.6rem;
    font-weight:600;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    box-shadow: 1px 1px rgba(0,0,0,0.5);
}

.navBottomLeft {
    display: flex;
    margin: 0.6rem 0 0 1.3rem;
}

.navBottomRight {
    display: flex;
    margin: 0.6rem 2.2rem 0 0rem;
}

.navBottom .link{
    text-decoration: none;
    color: white;
    margin: 0 0.5rem;
    cursor: pointer;
}

.navBottomRight img {
    width: 1.1rem;
    height: 1.1rem;
    margin-left: 0.5rem;
    cursor: pointer;
}
`