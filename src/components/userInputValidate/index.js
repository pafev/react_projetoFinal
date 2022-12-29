import { Container } from "./styles"

const UserInputValidate = ({title, placeholder, setData, type, valueToCompare}) => {


    return (
        <Container>
            <div className="inputContent">
                <span>{title}</span>
                <input placeholder={placeholder}
                    onChange={(event) => valueToCompare === event.target.value?
                        setData(true) : 
                        setData(false)}
                    type={type}>
                </input>
            </div>
        </Container>
    )   
}

export default UserInputValidate