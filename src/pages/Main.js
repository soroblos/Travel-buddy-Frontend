import React, { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../components/header.js";
import FoodCard from "../components/FoodCard"
import { Button, Card, CardBody, Row, Modal, CardTitle, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


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