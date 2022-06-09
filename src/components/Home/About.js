import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function About() {
    return (
        <div style={{ fontFamily: "serif", fontSize: "20px" }}>
            <img src="image/banner.jpg" alt="" width="100%" height="10%" />
            <Container className="mt-5">
                <Row>
                    <Col lg={2} className="border-right">
                        <p><strong>Our Seeling</strong> <br />
                            Our objectives <br />
                            Our values <br />
                            Our Service <br />
                            Online Shop <br />
                            What we do?</p>

                    </Col>
                    <Col lg={10} className="">
                        <h4><strong>Our mission</strong></h4><br />
                        <p><strong>Onlin Shop</strong> is a non-profit organization under French law, created in 2005, operating in three Asian countries: Cambodia, the Philippines and Vietnam.

                            Our mission is to provide education, technical and professional training in the digital sector to young underprivileged people by leveraging their potential and willpower. We endeavour to truly develop their employability which will allow them and their families to escape poverty in a sustainable way, and contribute to the social and economic development of their countries.

                            Our beneficiaries are typically underprivileged or disadvantaged, in extremely precarious situations, according to the criteria PN has defined/specified for each of the countries in which it operates.</p>
                    </Col>
                </Row>
                <h4 className="text-center mt-5"><strong className="text-center">Our Partner </strong></h4>

                <Row className="mt-2 p-5">
                    <Col>
                        <img src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/QVE2M3JDVFLNJKGJARGWFRUDCQ.jpg" alt="" width="255px" />
                    </Col>
                    <Col>
                        <img src="https://cdn.vox-cdn.com/thumbor/fQDDF90qsiR0Sl2OUOdvZBqUZ-I=/0x0:4000x2666/1200x800/filters:focal(1680x1013:2320x1653)/cdn.vox-cdn.com/uploads/chorus_image/image/70230975/1234603350.0.jpg" alt="" width="255px" />
                    </Col>
                    <Col>
                        <img src="https://axiomq.com/wp-content/uploads/2020/03/Ali-Baba-e-commerce-companies-41.jpg" alt="" width="300px" />

                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;