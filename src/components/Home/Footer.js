import React from "react";
import { Link } from 'react-router-dom';
import { Col, Container, Row } from "react-bootstrap";
// import CardSubscribe from "./CardSubscribe";
function Footer() {
  return (
    <div className="footerColor" style={{ position: "relative", fontFamily: "serif", fontSize: "20px" }}>
      <Container>
        {/* <CardSubscribe style={{ position: "absolute" }} /> */}
        <Row>
          <Col xs={4} sm={4} md={4} lg={4}>
            <div className="row">
              <Link to="/"> <img src="image/logo.png" alt="logo" width="50%" /></Link>
            </div>
            <p className="mt-2">

              <strong>Online Shop</strong> Provide the best clothes quality for all your needs with Best Clothes.

            </p>

          </Col>
          <Col xs={4} lg={4} sm={4} md={4}>
            <h4>Support</h4>
            <p>FAQ</p>
            <p>Finding Store</p>
            <p>Order Now</p>

          </Col>

          <Col xs={4} lg={4} sm={4} md={4}>
            <h4>Contact</h4>

            <div className="row">
              <img src="image/fb.png" alt="" width="110px" style={{ marginLeft: "10px" }} />

            </div>
            <strong className="mt-2">&copy;2020OnlineShop</strong>
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default Footer;
