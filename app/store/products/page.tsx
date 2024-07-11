"use client"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Products() {
    var productList = [{
        "title": "Card Titl 1",
        "description": "Some quick example text to build on the card title and make up the bulk of the card's content. 1"
    }, {
        "title": "Card Title 2",
        "description": "Some quick example text to build on the card title and make up the bulk of the card's content. 2"
    }, {
        "title": "Card Title 3",
        "description": "Some quick example text to build on the card title and make up the bulk of the card's content. 3"
    },{
        "title": "Card Title 4",
        "description": "Some quick example text to build on the card title and make up the bulk of the card's content. 4"
    },{
        "title": "Card Title 5",
        "description": "Some quick example text to build on the card title and make up the bulk of the card's content. 5"
    }];

    return (<main className="flex min-h-screen flex-col items-center justify-between p-24">
        Hello Tushar. Welcome Products..!!!!!
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
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))
            }
        </div>
    </main>);
}