import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

function Detail1() {
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} lg={6} sm={12} md={6} xl={6}>
        <img src="https://thumbs.dreamstime.com/b/full-length-portrait-beautiful-female-model-casual-clothes-collection-white-background-full-length-portrait-beautiful-112205501.jpg" alt="vpn" className="img1" width="90%" />

        {/* <img src="https://i.pinimg.com/originals/2c/21/5f/2c215f5d99323010846b2450fae09d87.jpg" alt="vpn" className="img1" width="80%" /> */}
        </Col>
        <Col className="mt-5" lg={6} xs={12} sm={12} md={6} xl={6}>
          <h2>
            We Provide Many
            Fashions You Can Choose
          </h2>
          <h2 className="text-danger">Jean Suit</h2>
          <p>
            You can order any fashion that our shop provide with the best cost
            have many fashion such as
          </p>
          <Col>
            <p>
              <CheckCircleIcon className="text-success mr-3" />
              <strong className="text-primary">Color</strong> : We have all colors in stock   
            </p>
            <p>
              <CheckCircleIcon className="text-success mr-3" />
              <strong className="text-primary">Size</strong> :We have all sizes in stock    
            </p>
           
            <p>
              <CheckCircleIcon className="text-success mr-3" />
              <strong className="text-primary">Price</strong> :250$   
            </p>
           
           
          </Col>
          <p>
            You can order any fashion that our shop provide with the best cost
            <br />
            have many fashion such as
          </p>
          <Col>
            <p>
              <CheckCircleIcon className="text-success mr-3" /> Dresses
            </p>
            <p>
              <CheckCircleIcon className="text-success mr-3" /> Jeans
            </p>
            <p>
              <CheckCircleIcon className="text-success mr-3" /> Sport
            </p>
           
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

export default Detail1;
