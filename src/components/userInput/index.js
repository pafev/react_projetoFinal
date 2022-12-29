import { Container } from "./styles"

const UserInput = ({title, placeholder, setData}) => {


    return (
        <Container>
            <div className="inputContent">
                <span>{title}</span>
                <input placeholder={placeholder}
                    onChange={(event) => setData(event.target.value)}>
                </input>
            </div>
        </Container>
    )   
}

export default UserInput