import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardTitle, CardBody, Button, CardGroup, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useNavigate } from "react-router-dom";

const FoodCard = ({ item, deleteFood }) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const navigate = useNavigate()
    const handleDelete = (event) => {
        event.preventDefault()
        deleteFood(item.id)
        navigate('/travel')
    }

    return (
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <CardGroup>
                <Card>
                    <CardImg
                        alt={item.name}
                        src={item.img}
                        top
                        style={{ height: "200px", objectFit: "cover" }}
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            {item.name}
                        </CardTitle>
                        <div>
                            <Button color="primary"
                                size="sm" onClick={toggle}>
                                More info
                            </Button>
                            <Modal isOpen={modal} toggle={toggle} {...item}>
                                <ModalHeader toggle={toggle}>{item.name}</ModalHeader>
                                <ModalBody>
                                    <img src={item.img} style={{ width: '100%', height: "200px", objectFit: "cover" }} />
                                    <div style={{ marginTop: '10px' }}>
                                        {item.location}
                                    </div>
                                    <div style={{ marginTop: '10px' }}>
                                        {item.description}
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color='danger'><form onSubmit={handleDelete}>
                                        <input type="submit" value='Delete' />
                                    </form></Button>{''}
                                    <Button color="primary" disabled onClick={null}>
                                        Coming Soon
                                    </Button>{' '}
                                    <Button color="secondary" onClick={toggle}>
                                        Close
                                    </Button>
                                </ModalFooter>
                            </Modal>
                        </div>
                    </CardBody>
                </Card>
            </CardGroup>
        </div>
    )
}

export default FoodCard