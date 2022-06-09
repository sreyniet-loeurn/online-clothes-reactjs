import React from "react";
import { Form, Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
export const Contact = () => {
  return (
    <Container id="main-container" className="d-grid h-100 mt-5" style={{fontFamily:"serif", fontSize:"20px"}}>
      <Row className="p-5">
        <Col>
        <Container>
            <div><h3>Contact us</h3>
              <strong>721 Preah Monivong Blvd, Phnom Penh 12304, Cambodia.</strong>
                </div>
        </Container>
        </Col>
        <Col>
          <Link to="https://www.google.com/maps/place/Passerelles+Num%C3%A9riques+Cambodia+(PNC)/@11.5508598,104.8830836,15z/data=!4m5!3m4!1s0x0:0x171e0b69c7c6f7ba!8m2!3d11.5508598!4d104.8830836">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15636.055632678006!2d104.8830836!3d11.5508598!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x171e0b69c7c6f7ba!2sPasserelles%20Num%C3%A9riques%20Cambodia%20(PNC)!5e0!3m2!1sen!2skh!4v1648707400994!5m2!1sen!2skh" width="500" height="300" style={{border:"none"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Link>
         </Col>
      </Row>
      <Row className="mt-5 p-5">
        <Col>
        <Container>
            <div><h3>Contact Information</h3>
              <strong>
                Business hours : </strong>8am - 5pm <br></br>
              <strong> Contact Number : </strong>+855 23 999 989 | 012 999 489 <br />
              <strong>Email : </strong> care.centre@wingmoney.com</div>
        </Container>
                    
        </Col>
        <Col> <Card>
          <Form id="sign-in-form" className="text-center p-3 w-100">

            <h3 className="mb-3 fs-3 fw-normal">Feedback</h3>

            <Form.Group controlId="yourName">
              <Form.Control type="text" size="lg" placeholder="Your Name" autoComplete="yourName" className="position-relative" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" placeholder="Your Purpose" rows={3} />
            </Form.Group>
            <div className="d-grid">
              <Button variant="primary" size="lg">
                Submit
              </Button>
            </div>
          </Form>
        </Card></Col>
      </Row>
    </Container>
  );
};

export default Contact;
