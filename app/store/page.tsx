"use client"

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import StoreService from './service';

function Store() {
  let x = new StoreService();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="row justify-content-md-center mt-6">
        <div className="col col-lg-6">
          <Form>
            <Form.Group className="mb-6" controlId="formBasicEmail">
              <div className='row'>
                <div className='col-md-4 d-flex flex-row-reverse'><Form.Label className='mb-3'><b>Email/Phone No :</b></Form.Label></div>
                <div className='col-md-8'><Form.Control className='mb-3' type="email" placeholder="Enter email/Phone no" /></div>
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <div className='row'>
                <div className='col-md-4 d-flex flex-row-reverse'><Form.Label><b>Password :</b></Form.Label></div>
                <div className='col-md-8'><Form.Control type="password" placeholder="Password" /></div>
              </div>
            </Form.Group>
            <div className='row'>
              <div className='col-md-12 d-flex flex-row-reverse'>
                <Button variant="primary" onClick={x.handleLoginSubmit}>Submit</Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </main>);
}

export default Store;