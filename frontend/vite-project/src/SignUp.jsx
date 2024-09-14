import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import image1 from './assets/image1 blur.jpg';


const SignUpPage = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    
        // Get form values
        const firstname = event.target.firstname.value.trim();
        const email = event.target.email.value.trim();
        const password = event.target.password.value.trim();
    
        let hasError = false;
    
        // Basic validation
        
        if (!/\S+@\S+\.\S+/.test(email)) {
          alert('Please enter a valid email address.');
          hasError = true;
        }
        if (password.length < 6) {
          alert('Password must be at least 6 characters long.');
          hasError = true;
        }
    
        if (!hasError) {
          alert('Registration successful!');
          // Here you would typically send form data to the server
          // Example: 
          // fetch('/register', { method: 'POST', body: new FormData(event.target) });
        }
      };
    
  return (
    <div style={{backgroundColor:'#332569', backgroundImage: `url(${image1})`, backgroundSize: "cover"}}>
    
    



    <Container className=" d-flex justify-content-center align-items-center vh-100 ">
      <div className=" p-4 rounded shadow-sm" style={{backgroundColor:'#3f3f3f' , maxWidth: '500px', width: '100%' }}>
        <h1 className="text-left " style={{color: "coral", fontSize: "300%", fontFamily: "Inter", fontWeight: "800"}}> RoomUp</h1>
        <h2 className="mb-4 text-left" style={{color: "coral", fontSize: "100 ", fontFamily: "Inter", fontWeight: "600"}}>Register</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formFirstName">
            <Form.Label style={{ color: 'coral' , fontFamily: "Inter", fontWeight: "600"}}>First Name</Form.Label>
            <Form.Control type="text" name="firstname" required />
           
          </Form.Group>
          <Form.Group controlId="formLastName">
            <Form.Label style={{ color: 'coral' , fontFamily: "Inter", fontWeight: "600"}}>Last Name</Form.Label>
            <Form.Control type="text" name="lastname" required />
           
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label style={{ color: 'coral' , fontFamily: "Inter", fontWeight: "600"}}>Email</Form.Label>
            <Form.Control type="email" name="email" required />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label style={{ color: 'coral' , fontFamily: "Inter", fontWeight: "600"}}>Password</Form.Label>
            <Form.Control type="password" name="password" required />
          </Form.Group>
          <br>
          </br>
          <Button variant="primary" type="submit" className="w-100">
            Register
          </Button>
        </Form>
      </div>
    </Container>

    </div>
    
    
  );
};

export default SignUpPage;