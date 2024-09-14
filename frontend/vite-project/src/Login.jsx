import React from 'react';

import { Form, Button, Container } from 'react-bootstrap';


const LoginPage = () => {
 
  
    const handleSubmit = (event) => {
        event.preventDefault();
    
       
      };

      
    
  return (
<div style={{backgroundColor:'#332569' ,
    padding: "20px", display: "flex"}}>
    
<div style={{display:"inline-block", flex: 1, borderWidth: "2px", padding: "50px", marginRight: "50px", marginTop:"100px"}}>

    <h1 style={{color : 'coral',fontFamily:"Inter", fontWeight:"700", fontSize: '800%', display: 'inline-block'}}>
        RoomUp
    </h1>
    <a href="/signup" style={{color : 'coral',fontFamily:"Inter", fontWeight:"700", fontSize: '200%', display: 'inline-block'}}>
Create Account
    </a>
</div>


    <Container
  className="d-flex justify-content-flex-end align-items-center vh-100"
  style={{ justifyContent: 'flex-end', marginRight:"150px", flex: 1 ,display:"inline-block"}} // Adjust the container alignment
>
      <div className=" p-4 rounded shadow-sm" style={{backgroundColor:'#3f3f3f' , maxWidth: '500px', width: '100%' }}>
        <h1 className="text-left " style={{color: "coral", fontSize: "300%", fontFamily: "Inter", fontWeight: "800"}}> Log In</h1>
       
        <Form onSubmit={handleSubmit}>
         
          <Form.Group controlId="formEmail">
            <Form.Label style={{ color: 'coral' , fontFamily: "Inter", fontWeight: "600"}}>Email*</Form.Label>
            <Form.Control type="email" name="email" required />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label style={{ color: 'coral' , fontFamily: "Inter", fontWeight: "600"}}>Password*</Form.Label>
            <Form.Control type="password" name="password" required />
          </Form.Group>
          <a href="https://twitter.com" style={{color: 'coral' }}>
            Forgot your password?
          </a>

          <br>
          </br>
          <br>
          </br>
          <Button variant="primary" type="submit" className="w-100">
            Login
          </Button>
        </Form>
      </div>
    </Container>

    </div>
    
    
  );
};



export default LoginPage;