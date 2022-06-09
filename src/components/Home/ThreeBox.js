import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import DoneIcon from "@material-ui/icons/Done";
import Content5 from "./HugeGlobalNetwork";

export const ThreeBox = () => {
  return (
    <Container className="">
      <h2 className="text-center">Choose Your Plan</h2>
      <p className="text-center">
        Let's choose the package that is best for you and explore it happily and
        <br />
        cheerfully.
      </p>

      <Row>
        <Col xs={12} sm={12} md={4} lg={4} className="mt-4">
          <Card className="Card">
            <Card.Img src="image/img3.png" className="boxLocation"/>
            <Card.Body>
              <Card.Title className="text-center">Free Plan</Card.Title>
              <Card.Text className="ml-5 ">
                <p className="bodyText">
                  <DoneIcon className="text-success" /> Unlimited Bandwitch
                </p>
                <p className="bodyText">
                  <DoneIcon className="text-success" /> Encrypted Connection
                </p>
                <p className="bodyText">
                  <DoneIcon className="text-success" /> No Traffic Logs
                </p>
                <p className="bodyText">
                  <DoneIcon className="text-success" /> Works on All Devices
                </p>
              </Card.Text>
            </Card.Body>
            <br></br>
            <Card.Body className="mt-5 text-center">
              <h3 className="mt-2">Free</h3>
              <button className="btn btn-outline-danger rounded-pill mt-1 mt-3 btnSelect">
                Seclect
              </button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={12} md={4} lg={4} className="mt-4">
          <Card className="Card">
            <Card.Img src="image/img3.png" className="boxLocation" />
            <Card.Body>
              <Card.Title className="text-center">Standard Plan</Card.Title>
              <Card.Text className="ml-5 bodyText">
                <p className="bodyText">
                  <DoneIcon className="text-success" /> Unlimited Bandwitch
                </p>
                <p className="bodyText">
                  <DoneIcon className="text-success" /> Encrypted Connection
                </p>
                <p className="bodyText">
                  <DoneIcon className="text-success" /> Yes Traffic Logs
                </p>
                <p className="bodyText">
                  <DoneIcon className="text-success" /> Works on All Devices
                </p>
                <p className="bodyText">
                  <DoneIcon className="text-success" /> Connect Anyware
                </p>
              </Card.Text>
            </Card.Body>
            <br></br>
            <Card.Body className="mt-3 text-center">
              <h3>$9 / mo</h3>
              <button className="btn btn-outline-danger rounded-pill mt-3 mb-1 btnSelect">
                Seclect
              </button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={12} md={4} lg={4} className="mt-4 ">
          <Card className="border border-danger Card">
            <Card.Img src="image/img3.png" className="boxLocation" />
            <Card.Body>
              <Card.Title className="text-center">Premium Plan</Card.Title>
              <Card.Text className="ml-5 bodyText">
                <p className="bodyText">
                  <DoneIcon className="text-success" /> Unlimited Bandwitch
                </p>
                <p className="bodyText">
                  <DoneIcon className="text-success" /> Encrypted Connection
                </p>
                <p className="bodyText">
                  <DoneIcon className="text-success" /> YES Traffic Logs
                </p>
                <p className="bodyText">
                  <DoneIcon className="text-success" /> Works on All Devices
                </p>
                <p className="bodyText">
                  <DoneIcon className="text-success" /> Connect Anyware
                </p>
                <p className="bodyText">
                  <DoneIcon className="text-success" /> Get New Feature
                </p>
              </Card.Text>
            </Card.Body>
            <Card.Body className="text-center">
              <h3>$12 / mo</h3>
              <button className="btn btn-danger rounded-pill mb-1 mt-3 btnSelect">
                Seclect
              </button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Content5 />
    </Container>
  );
};

export default ThreeBox;
