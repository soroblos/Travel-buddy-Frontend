import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, Button, CardFooter, CardGroup } from "reactstrap";



const Form = (props) => {
    const navigate = useNavigate()
    const params = useParams()

    const currentItem = useMemo(() => props.items.find(item => {
        console.log(item.id, params.id)
        return item.id === parseInt(params.id)
    }), [params.id, props.items])

    const [formData, setFormData] = useState(
        props.formType === 'new' ?
            {
                name: '',
                location: '',
                img: '',
                description: '',
                upvote: 0,
                downvote: 0
            } :
            {
                name: currentItem.name,
                description: currentItem.description,
                id: currentItem.id
            }
    )

    const handleChange = (event) => {
        setFormData((prev) => (
            {
                ...prev,
                [event.target.name]: event.target.value
            }
        ))
    }

    const handleSubmisson = (event) => {
        event.preventDefault()
        props.handleSubmit(formData, props.formType)
        navigate('/travel')
    }

    return (
        <div style={{
            display: 'flex',
            justifycontent: 'center',
            alignitems: 'center',
            height: '100vh'
        }}>
            <Card style={{
                width: '18rem',
            }}>
                <CardBody>
                    <form onSubmit={handleSubmisson}>
                        <CardTitle>Name</CardTitle>
                        <input
                            type="text"
                            onChange={handleChange}
                            value={formData.name}
                            name="name"
                        />
                        <CardTitle>Location</CardTitle>
                        <input
                            type="text"
                            onChange={handleChange}
                            value={formData.location}
                            name="location"
                        />
                        <CardTitle>img url</CardTitle>
                        <input
                            type="text"
                            onChange={handleChange}
                            value={formData.img}
                            name="img"
                        />
                        <CardTitle>Description</CardTitle>
                        <textarea
                            type="text"
                            onChange={handleChange}
                            value={formData.description}
                            name="description"
                        />
                        <br />
                        <input type="submit" value={props.buttonLabel} />

                    </form>
                </CardBody>
            </Card>
        </div>

    )
};

export default Form;