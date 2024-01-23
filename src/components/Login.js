import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className='backimg d-flex align-items-center justify-content-center' style={{height:'100vh'}}><br/><br/><br/>
    <Card style={{ width: '22rem',border:"none"}} className='mx-4 mt-4 card_style p-4'>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Agree with Policy" />
        <Link to='/signup'><Button variant="danger" type="submit">
            Sign up
        </Button> </Link>
      </Form.Group>
      
      <div>
      <Button variant="danger" type="submit" className='col-sm-12'>
        Submit
      </Button>
      </div>
    </Form>
    </Card>
    <br/><br/><br/><br/><br/><br/><br/>  
    </div>
  )
}

