import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

function ProvideManyFeature() {
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} lg={6} sm={12} md={6} xl={6}>
          <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-clothing-store-design-template-8eb64931df72be859800e4f967bcbdd4_screen.jpg?ts=1610537798" alt="" className="mt-3" width="100%"/>
        </Col>
        <Col className="mt-5" lg={6} xs={12} sm={12} md={6} xl={6}>
          <h2>
            We Provide Many <br />
            Fashion You Can Choose
          </h2>
          <br />
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

export default ProvideManyFeature;
