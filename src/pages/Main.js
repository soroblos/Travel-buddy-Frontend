import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../components/header.js";
import FoodCard from "../components/FoodCard"
import { Button, Row } from 'reactstrap';


const Main = (props) => {

    return (
        <>
            <Header />
            <div>
                <Link to='/new'> <Button>Add Store</Button></Link>
            </div>
            <Row>
                {
                    props.items.map((item) => <FoodCard item={item} key={item.id} deleteFood={props.deleteFood} />
                    )
                }
            </Row>

        </>
    )
}

export default Main