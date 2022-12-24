import { Container } from "./styles"
import Dropdown from "../../components/dropdown"

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
                    <Dropdown name={'Categoria'} />
                    <Dropdown name={'Preço'} />
                    <Dropdown name={'Marca'} />
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