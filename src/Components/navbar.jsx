import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { MagnifyingGlass, ShoppingCart } from "phosphor-react";
import { useCartContext } from '../Context/CartContext';




const Navbars = () => {
  const{cart}=useCartContext()
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <Navbar bg="dark" expand="lg" data-bs-theme="dark" className= "fixed-top" >
        <Container>
          <Navbar.Brand href="/home" style={{ fontWeight: 'bold', fontSize: '2rem' }}>RUN</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/Home">Home</Nav.Link>
              <Nav.Link href="/Product">Product</Nav.Link>
              <Nav.Link href="/AboutUs">About Us</Nav.Link>
              <Nav.Link href="/Blog">Blog</Nav.Link>
              <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
            </Nav>
            <div className='text-light mx-5' >
            <ShoppingCart color='white' className='mx-2' weight="bold" size={20} />
            <span  >
              {
                cart
              }
            </span>
            </div>
            <Form inline>
              <div className='position-relative'>
                <MagnifyingGlass
                  className='position-absolute mt-0.5'
                  color='white'
                  weight="bold"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  style={{ left: '180px', top: '30%', cursor: isHovered ? 'pointer' : 'default' }}
                />
                

                <Form.Control
                  type="text"
                  placeholder="Search Products"
                  className="mr-sm-2 pl-5" // Add padding to the left to accommodate the icon
                />
              </div>
            </Form>
            <Nav>
              <Nav.Link href="#sign-in">Sign In</Nav.Link>
              <Nav.Link href="#create-account">Create Account</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;
