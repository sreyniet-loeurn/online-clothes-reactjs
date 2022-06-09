import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';
function updateProduct() {
  return (

    <Navbar collapseOnSelect expand="lg" className="bg-warning" variant="light">
      <Navbar.Brand href="/">
        <img src="image/logo.png" alt="logo" width="25%" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        {/* Nav Link :: */}
        <Nav className="ml-auto" style={{ marginRight: "10px", fontFamily: "serif", fontSize: "20px" }}>
          <strong>
            <Nav.Link> <Link to="/" style={{ textDecoration: "none" }} className="text-dark" >Home</Link></Nav.Link>
          </strong>
          <strong>
            <Nav.Link > <Link to="/ListingPage" style={{ textDecoration: "none" }} className="text-dark" >Product</Link></Nav.Link>
          </strong>

          <strong>
            <Nav.Link> <Link to="/About" style={{ textDecoration: "none" }} className="text-dark" >About </Link></Nav.Link>
          </strong>

          <strong>
            <Nav.Link > <Link to="/contact" style={{ textDecoration: "none" }} className="text-dark" >Contact Us </Link></Nav.Link>
          </strong>


        </Nav>
        <Nav>
          {/* Right Menu :: */}

          <Nav.Link>
            <button
              className="shadow btn btn-outline-warning rounded-pill"
              style={{ width: 150 }}
            >

              <a href="" className="text-dark" style={{ fontSize: "20px", fontFamily: "serif", textDecoration: "none" }}><Link to="/Login" style={{ textDecoration: "none" }} className="text-dark" > Sign In</Link>  </a>
            </button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );
}

export default updateProduct;