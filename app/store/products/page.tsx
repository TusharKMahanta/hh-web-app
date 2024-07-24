"use client"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {reRoute} from '../../routing';

function changeValue(product: any): void {
    product.quantity = 4;
}
function navigateCartPage(): void {
    reRoute('/store/cart');
}
var productList = [{
    "title": "Basmati Rice",
    "description": "Some quick example text to build on the card title and make up the bulk of the card's content. 1",
    "quantity": 1
}, {
    "title": "Harad Daal",
    "description": "Some quick example text to build on the card title and make up the bulk of the card's content. 2",
    "quantity": 1
}, {
    "title": "Masoor Daal",
    "description": "Some quick example text to build on the card title and make up the bulk of the card's content. 3",
    "quantity": 1
}, {
    "title": "Tomato",
    "description": "Some quick example text to build on the card title and make up the bulk of the card's content. 4",
    "quantity": 1
}, {
    "title": "Onion",
    "description": "Some quick example text to build on the card title and make up the bulk of the card's content. 5",
    "quantity": 2
}];
export default function Products() {

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Mor Haat</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                    <Button variant="outline-success"><i className="bi bi-cart4" onClick={()=>navigateCartPage()}></i></Button>
                </Container>
            </Navbar>
            <br />
            <Container fluid="xxl">
                <main className="flex min-h-screen flex-col items-center justify-between p-24">
                    <div className='row' hidden>
                        <div className='col-md-10'>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder="Search"
                                    aria-label="Search"
                                    aria-describedby="basic-addon1"
                                />
                                <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
                            </InputGroup>
                        </div>

                    </div>

                    <div className='row'>
                        {
                            productList.map(product => (
                                <div className='col-md-auto' key={product.title}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="/img/286x180.svg" />
                                        <Card.Body>
                                            <Card.Title>{product.title}</Card.Title>
                                            <Card.Text>
                                                {product.description}
                                            </Card.Text>
                                            <ButtonGroup size="lg" className='btn-group btn-secondary'>
                                                <Button className="btn btn-light btn-outline-secondary"><i className="bi bi-cart-dash-fill"></i></Button>
                                                <DropdownButton as={ButtonGroup} title={product.quantity} variant="light" bsPrefix="btn btn-light btn-outline-secondary" id={product.title} onSelect={() => changeValue(product)}>
                                                    <Dropdown.Item eventKey="1">1</Dropdown.Item>
                                                    <Dropdown.Item eventKey="2">2</Dropdown.Item>
                                                </DropdownButton>
                                                <Button className="btn btn-light btn-outline-secondary"><i className="bi bi-cart-plus-fill"></i></Button>
                                            </ButtonGroup>
                                        </Card.Body>
                                    </Card>
                                </div>
                            ))
                        }
                    </div>
                </main>
            </Container>
        </>);
}