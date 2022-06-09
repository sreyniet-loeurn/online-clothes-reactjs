import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardOfUserLocationAndServer from "./CardOfUserLocationAndServer";
import ProvideManyFeature from "./ProvideManyFeature";

function GetStart() {
  return (
    <div>
      <Container style={{fontFamily:"serif", fontSize:"20px"}}>
        <Row className="mt-5 mb-5">
          <Col xs={12} lg={6}>
            <h3>
              Welcome To  <br></br>
              The Clothing Online Shop
            </h3>
            <p className="mt-3">
              Provide the best clothes quality for all your needs with {" "}
              <strong>Best Clothes </strong>
              discover intersting features from us.
            </p>

            <a
              href="/"
              class="btn btn-warning btn-lg mt-5 shadow-lg p-3 btnGetSart"
            >
              Order Now
            </a>
          </Col>
          <Col xs={12} lg={6} className="mt-5">
            <img src="https://www.chinadaily.com.cn/life/images/attachement/jpg/site1/20100723/0023ae9885da0db33ab239.jpg" alt="vpn" className="img1" width="100%" />
          </Col>
        {/* <CardOfUserLocationAndServer className="mt-5" /> */}
        {/* <ProvideManyFeature className="mt-5" /> */}
      
        </Row>
      </Container>
    </div>
  );
}

export default GetStart;
