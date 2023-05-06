import { Link } from "react-router-dom"
import React, { useState } from 'react';
import {
    Button, Offcanvas, OffcanvasHeader, OffcanvasBody, NavLink, NavItem, Nav
} from 'reactstrap';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)
    return (
        <>
            <div style={{ display: "flex", alignItems: "center", marginRight: "10px" }}>
                <div>
                    <Button color="light" style={{
                        background: "url('https://img.myloview.com/canvas-prints/menu-icon-web-menu-icon-700-170478197.jpg')", backgroundSize: 'cover',
                        width: '50px',
                        height: '50px',
                        border: 'transparent',
                    }} onClick={toggle}>

                    </Button>
                    <Offcanvas isOpen={isOpen} toggle={toggle}>
                        <OffcanvasHeader toggle={toggle}>
                            States
                        </OffcanvasHeader>
                        <OffcanvasBody>
                            <ul>
                                <ol>
                                    <Link style={{ textDecoration: 'none', borderbottom: '1px solid', transition: 'border-color 0.2s ease-in-out' }}>
                                        <strong>
                                            Alabama
                                        </strong>
                                    </Link>
                                </ol>
                                <ol>
                                    <Link style={{ textDecoration: 'none', borderbottom: '1px solid', transition: 'border-color 0.2s ease-in-out' }}>
                                        <strong>
                                            Alaska
                                        </strong>
                                    </Link>
                                </ol>
                                <ol>
                                    <Link style={{ textDecoration: 'none', borderbottom: '1px solid', transition: 'border-color 0.2s ease-in-out' }}>
                                        <strong>
                                            Arizona
                                        </strong>
                                    </Link>
                                </ol>
                                <ol>
                                    <Link style={{ textDecoration: 'none', borderbottom: '1px solid', transition: 'border-color 0.2s ease-in-out' }}>
                                        <strong>
                                            Arkansas
                                        </strong>
                                    </Link>
                                </ol>
                                <ol>
                                    <Link style={{ textDecoration: 'none', borderbottom: '1px solid', transition: 'border-color 0.2s ease-in-out' }}>
                                        <strong>
                                            California
                                        </strong>
                                    </Link>
                                </ol>
                                <ol>
                                    <Link style={{ textDecoration: 'none', borderbottom: '1px solid', transition: 'border-color 0.2s ease-in-out' }}>
                                        <strong>
                                            Connecticut
                                        </strong>
                                    </Link>
                                </ol>
                                <ol>
                                    <Link style={{ textDecoration: 'none', borderbottom: '1px solid', transition: 'border-color 0.2s ease-in-out' }}>
                                        <strong>
                                            Delaware
                                        </strong>
                                    </Link>
                                </ol>
                                <ol>
                                    <Link style={{ textDecoration: 'none', borderbottom: '1px solid', transition: 'border-color 0.2s ease-in-out' }}>
                                        <strong>
                                            Florida
                                        </strong>
                                    </Link>
                                </ol>
                                <ol>
                                    <Link style={{ textDecoration: 'none', borderbottom: '1px solid', transition: 'border-color 0.2s ease-in-out' }}>
                                        <strong>
                                            Georgia
                                        </strong>
                                    </Link>
                                </ol>
                                <ol>
                                    <Link style={{ textDecoration: 'none', borderbottom: '1px solid', transition: 'border-color 0.2s ease-in-out' }}>
                                        <strong>
                                            Hawaii
                                        </strong>
                                    </Link>
                                </ol>
                                <ol>
                                    <Link style={{ textDecoration: 'none', borderbottom: '1px solid', transition: 'border-color 0.2s ease-in-out' }}>
                                        <strong>
                                            Idaho
                                        </strong>
                                    </Link>
                                </ol>
                                <ol>
                                    <Link style={{ textDecoration: 'none', borderbottom: '1px solid', transition: 'border-color 0.2s ease-in-out' }}>
                                        <strong>
                                            Illinois
                                        </strong>
                                    </Link>
                                </ol>
                                <ol>
                                    <Link style={{ textDecoration: 'none', borderbottom: '1px solid', transition: 'border-color 0.2s ease-in-out' }}>
                                        <strong>
                                            Indiana
                                        </strong>
                                    </Link>
                                </ol>
                                <ol>
                                    <Link style={{ textDecoration: 'none', borderbottom: '1px solid', transition: 'border-color 0.2s ease-in-out' }}>
                                        <strong>
                                            Iowa
                                        </strong>
                                    </Link>
                                </ol>
                                <ol>
                                    <Link style={{ textDecoration: 'none', borderbottom: '1px solid', transition: 'border-color 0.2s ease-in-out' }}>
                                        <strong>
                                            Kansas
                                        </strong>
                                    </Link>
                                </ol>
                                <ol>
                                    <Link style={{ textDecoration: 'none', borderbottom: '1px solid', transition: 'border-color 0.2s ease-in-out' }}>
                                        <strong>
                                            Kentucky
                                        </strong>
                                    </Link>
                                </ol>
                                <ol>
                                    <Link style={{ textDecoration: 'none', borderbottom: '1px solid', transition: 'border-color 0.2s ease-in-out' }}>
                                        <strong>
                                            Louisiana
                                        </strong>
                                    </Link>
                                </ol>
                                <ol>
                                    <Link style={{ textDecoration: 'none', borderbottom: '1px solid', transition: 'border-color 0.2s ease-in-out' }}>
                                        <strong>
                                            Main
                                        </strong>
                                    </Link>
                                </ol>
                                <ol>
                                    <Link style={{ textDecoration: 'none', borderbottom: '1px solid', transition: 'border-color 0.2s ease-in-out' }}>
                                        <strong>
                                            Maryland
                                        </strong>
                                    </Link>
                                </ol>
                                <ol>
                                    <Link style={{ textDecoration: 'none', borderbottom: '1px solid', transition: 'border-color 0.2s ease-in-out' }}>
                                        <strong>
                                            Massachusetts
                                        </strong>
                                    </Link>
                                </ol>
                                <ol>
                                    <Link style={{ textDecoration: 'none', borderbottom: '1px solid', transition: 'border-color 0.2s ease-in-out' }}>
                                        <strong>
                                            Michigan
                                        </strong>
                                    </Link>
                                </ol>
                                <ol>
                                    <Link style={{ textDecoration: 'none', borderbottom: '1px solid', transition: 'border-color 0.2s ease-in-out' }}>
                                        <strong>
                                            Minnesota
                                        </strong>
                                    </Link>
                                </ol>
                                <ol>
                                    <Link style={{ textDecoration: 'none', borderbottom: '1px solid', transition: 'border-color 0.2s ease-in-out' }}>
                                        <strong>
                                            Mississipi
                                        </strong>
                                    </Link>
                                </ol>
                                <ol>
                                    <Link style={{ textDecoration: 'none', borderbottom: '1px solid', transition: 'border-color 0.2s ease-in-out' }}>
                                        <strong>
                                            Missouri
                                        </strong>
                                    </Link>
                                </ol>
                                <ol>
                                    <Link style={{ textDecoration: 'none', borderbottom: '1px solid', transition: 'border-color 0.2s ease-in-out' }}>
                                        <strong>
                                            Montana
                                        </strong>
                                    </Link>
                                </ol>
                                <ol>
                                    <Link style={{ textDecoration: 'none', borderbottom: '1px solid', transition: 'border-color 0.2s ease-in-out' }}>
                                        <strong>
                                            Nebraska
                                        </strong>
                                    </Link>
                                </ol>
                                <ol>
                                    <Link style={{ textDecoration: 'none', borderbottom: '1px solid', transition: 'border-color 0.2s ease-in-out' }}>
                                        <strong>
                                            Nevada
                                        </strong>
                                    </Link>
                                </ol>
                                <ol>
                                    <Link style={{ textDecoration: 'none', borderbottom: '1px solid', transition: 'border-color 0.2s ease-in-out' }}>
                                        <strong>
                                            New Hampshire
                                        </strong>
                                    </Link>
                                </ol>
                                <ol>
                                    <Link style={{ textDecoration: 'none', borderbottom: '1px solid', transition: 'border-color 0.2s ease-in-out' }}>
                                        <strong>
                                            New Jersey
                                        </strong>
                                    </Link>
                                </ol>
                                <ol>
                                    <Link style={{ textDecoration: 'none', borderbottom: '1px solid', transition: 'border-color 0.2s ease-in-out' }}>
                                        <strong>
                                            New Mexico
                                        </strong>
                                    </Link>
                                </ol>
                                <ol>
                                    <Link style={{ textDecoration: 'none', borderbottom: '1px solid', transition: 'border-color 0.2s ease-in-out' }}>

                                        <strong>
                                            New York
                                        </strong>
                                    </Link>
                                </ol>
                                <ol>
                                    <Link style={{ textDecoration: 'none', borderbottom: '1px solid', transition: 'border-color 0.2s ease-in-out' }}>
                                        <strong>
                                            North Carolina
                                        </strong>
                                    </Link>
                                </ol>
                                <ol>
                                    <Link style={{ textDecoration: 'none', borderbottom: '1px solid', transition: 'border-color 0.2s ease-in-out' }}>
                                        <strong>
                                            North Dakota
                                        </strong>
                                    </Link>
                                </ol>
                                <ol>
                                    <Link style={{ textDecoration: 'none', borderbottom: '1px solid', transition: 'border-color 0.2s ease-in-out' }}>
                                        <strong>
                                            Ohio
                                        </strong>
                                    </Link>
                                </ol>
                                <ol>
                                    <Link style={{ textDecoration: 'none', borderbottom: '1px solid', transition: 'border-color 0.2s ease-in-out' }}>
                                        <strong>
                                            Oklahoma
                                        </strong>
                                    </Link>
                                </ol>
                                <ol>
                                    <Link style={{ textDecoration: 'none', borderbottom: '1px solid', transition: 'border-color 0.2s ease-in-out' }}>
                                        <strong>
                                            Oregon
                                        </strong>
                                    </Link>
                                </ol>
                                <ol>
                                    <Link style={{ textDecoration: 'none', borderbottom: '1px solid', transition: 'border-color 0.2s ease-in-out' }}>
                                        <strong>
                                            Pennsylvania
                                        </strong>
                                    </Link>
                                </ol>
                                <ol>
                                    <Link style={{ textDecoration: 'none', borderbottom: '1px solid', transition: 'border-color 0.2s ease-in-out' }}>
                                        <strong>
                                            Rhode Island
                                        </strong>
                                    </Link>
                                </ol>
                                <ol>
                                    <Link style={{ textDecoration: 'none', borderbottom: '1px solid', transition: 'border-color 0.2s ease-in-out' }}>
                                        <strong>
                                            South Carolina
                                        </strong>
                                    </Link>
                                </ol>
                                <ol>
                                    <Link style={{ textDecoration: 'none', borderbottom: '1px solid', transition: 'border-color 0.2s ease-in-out' }}>
                                        <strong>
                                            South Dakota
                                        </strong>
                                    </Link>
                                </ol>
                                <ol>
                                    <Link style={{ textDecoration: 'none', borderbottom: '1px solid', transition: 'border-color 0.2s ease-in-out' }}>
                                        <strong>
                                            Tennessee
                                        </strong>
                                    </Link>
                                </ol>
                                <ol>
                                    <Link style={{ textDecoration: 'none', borderbottom: '1px solid', transition: 'border-color 0.2s ease-in-out' }}>
                                        <strong>
                                            Texas
                                        </strong>
                                    </Link>
                                </ol>
                                <ol>
                                    <Link style={{ textDecoration: 'none', borderbottom: '1px solid', transition: 'border-color 0.2s ease-in-out' }}>
                                        <strong>
                                            Utah
                                        </strong>
                                    </Link>
                                </ol>
                                <ol>
                                    <Link style={{ textDecoration: 'none', borderbottom: '1px solid', transition: 'border-color 0.2s ease-in-out' }}>
                                        <strong>
                                            Vermont
                                        </strong>
                                    </Link>
                                </ol>
                                <ol>
                                    <Link style={{ textDecoration: 'none', borderbottom: '1px solid', transition: 'border-color 0.2s ease-in-out' }}>
                                        <strong>
                                            Virginia
                                        </strong>
                                    </Link>
                                </ol>
                                <ol>
                                    <Link style={{ textDecoration: 'none', borderbottom: '1px solid', transition: 'border-color 0.2s ease-in-out' }}>
                                        <strong>
                                            Washington
                                        </strong>
                                    </Link>
                                </ol>
                                <ol>
                                    <Link style={{ textDecoration: 'none', borderbottom: '1px solid', transition: 'border-color 0.2s ease-in-out' }}>
                                        <strong>
                                            West Virginia
                                        </strong>
                                    </Link>
                                </ol>
                                <ol>
                                    <Link style={{ textDecoration: 'none', borderbottom: '1px solid', transition: 'border-color 0.2s ease-in-out' }}>
                                        <strong>
                                            Wisconsin
                                        </strong>
                                    </Link>
                                </ol>
                                <ol>
                                    <Link style={{ textDecoration: 'none', borderbottom: '1px solid', transition: 'border-color 0.2s ease-in-out' }}>
                                        <strong>
                                            Wyoming
                                        </strong>
                                    </Link>
                                </ol>
                                <ol>
                                    <Link style={{ textDecoration: 'none', borderbottom: '1px solid', transition: 'border-color 0.2s ease-in-out' }}>
                                        <strong>

                                        </strong>
                                    </Link>
                                </ol>
                            </ul>
                            <Link to='/' style={{
                                textDecoration: 'none',
                                borderBottom: '1px solid transparent',
                                transition: 'border-color 0.2s ease-in-out',
                                color: 'black'
                            }}
                            >
                                <Button
                                    color="light" style={{
                                        background: "url('https://static.vecteezy.com/system/resources/previews/004/220/756/original/home-silhouette-button-free-vector.jpg')", backgroundSize: 'cover',
                                        width: '30px',
                                        height: '30px',
                                        border: 'transparent'
                                    }}
                                >
                                </Button>
                            </Link>
                        </OffcanvasBody>

                    </Offcanvas>
                </div>
                <Nav
                    fill
                    pills
                >
                    <NavItem>
                        <NavLink
                            active
                            href="#"
                        >
                            Food
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink disabled href="#">
                            Activites
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink disabled href="#">
                            Todo List
                        </NavLink>
                    </NavItem>

                </Nav>
            </div>
        </>
    );
}

export default Header