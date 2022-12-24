import { Container } from "./styles"
import downIcon from '../../assets/down white icon.png'

const Home = () => {
    return (
        <Container>
        <link href="https://fonts.cdnfonts.com/css/jomolhari" rel="stylesheet"></link>
            <div className="welcome">
                <div><h1>
                    Bem vindo ao Ecommerce
                </h1></div>
            </div>
            <section className="exhibition">
                <div className="filters">
                    <button className="categories">
                        <p>
                            Categoria <img src={downIcon} alt='seta'></img>
                        </p>
                    </button>
                    <button className="price">
                        <p>
                            Preço <img src={downIcon} alt='seta'></img>
                        </p>
                    </button>
                    <button className="brand">
                        <p>
                            Marca <img src={downIcon} alt='seta'></img>
                        </p>
                    </button>
                    {/* <button className="filterResponsive">
                        <p>
                            Filtros <img src={downIcon} alt="seta"></img>
                        </p>
                    </button> */}
                </div>
                <div className="products">
                    <p>
                        Aqui ficam os produtos
                    </p>
                </div>
            </section>
        </Container>
    )
}

export default Home