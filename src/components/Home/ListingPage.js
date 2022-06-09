import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
function List() {
    return (
        <Container className="shadow mt-5 bg-white rounded" style={{ marginBottom: "50px", fontFamily: "serif", fontSize: "20px" }}>

            <h3 className="text-center p-5">We Provided Many Product to Client</h3>
            <Row>
                <Col
                    xs={12}
                    sm={12}
                    md={4}
                    lg={4}
                    className="border-right flexIconWithText"
                >
                    <div className="mt-5 ml-5">
                        <Link to="/detail1">
                            <img src="https://i.pinimg.com/originals/2c/21/5f/2c215f5d99323010846b2450fae09d87.jpg" alt="vpn" className="img1" width="80%" />

                        </Link>
                    </div>
                    <div className="mt-5 lengIconWithText">
                        <h4 className="ml-2 mr-5">200$</h4>
                        <p className="ml-2 mr-5">Silver Suit</p>
                    </div>
                </Col>
                <Col
                    xs={12}
                    sm={12}
                    md={4}
                    lg={4}
                    className="border-right flexIconWithText"
                >
                    <div className="mt-5 ml-3">
                        <Link to="/detail2">
                            <img src="https://i.pinimg.com/originals/07/cf/78/07cf78483ba770aebbae4b9459ac9324.jpg" alt="vpn" className="img1" width="100%" />
                        </Link>
                    </div>
                    <div className="mt-5 lengIconWithText">
                        <h4 className="ml-2 mr-5">250$</h4>
                        <p className="ml-2 mr-5">Purple Suit</p>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={4} lg={4} className="flexIconWithText">
                    <div className="mt-5 ml-3">
                        <Link to="/detail3">
                            <img src="https://cdna.lystit.com/photos/17c7-2015/05/09/tahari-asl-ocean-blue-asymmetrical-jacket-skirt-suit-blue-product-0-351305911-normal.jpeg" alt="vpn" className="img1" width="100%" />
                        </Link>
                    </div>
                    <div className="mt-5 lengIconWithText">
                        <h4 className="ml-2 mr-5">250$</h4>
                        <p className="ml-2 mr-5">Blue Suit</p>
                    </div>
                </Col>
            </Row>

            <Row className="">
                <Col
                    xs={12}
                    sm={12}
                    md={4}
                    lg={4}
                    className="border-right flexIconWithText"
                >
                    <div className="">
                        <Link to="/detail4">
                            <img src="https://m.media-amazon.com/images/I/51DoJVdSLWL._UY550_.jpg" alt="vpn" className="img1" width="100%" />
                        </Link>
                    </div>
                    <div className="mt-5 lengIconWithText">
                        <h4 className="ml-2 mr-5">200$</h4>
                        <p className="ml-2 mr-5">White​ Dress</p>
                    </div>
                </Col>

                <Col
                    xs={12}
                    sm={12}
                    md={4}
                    lg={4}
                    className="border-right flexIconWithText"
                >
                    <div className="mt-4 ml-3">
                        <Link to="/detail5">
                            <img src="https://thumbs.dreamstime.com/b/full-length-portrait-beautiful-female-model-casual-clothes-collection-white-background-full-length-portrait-beautiful-112205501.jpg" alt="vpn" className="img1" width="90%" />
                        </Link>
                    </div>
                    <div className="mt-5 lengIconWithText">
                        <h4 className="ml-2 mr-5">250$</h4>
                        <p className="ml-2 mr-5">Jean​​ Suit</p>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={4} lg={4} className="flexIconWithText">
                    <div className="mt-3 ml-3">
                        <Link to="/detail6">
                            <img src="https://m.media-amazon.com/images/I/51bOCCgzRJL._UL1280_.jpg" alt="vpn" className="img1" width="85%" />
                        </Link>
                    </div>
                    <div className="mt-5 lengIconWithText">
                        <h4 className="ml-2 mr-5">250$</h4>
                        <p className="ml-2 mr-5">White Suit</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col
                    xs={12}
                    sm={12}
                    md={4}
                    lg={4}
                    className="border-right flexIconWithText"
                >
                    <div className="mt-3">
                        <Link to="/detail7">
                            <img src="https://m.media-amazon.com/images/I/61U7fqcS6eL._UY606_.jpg" alt="vpn" className="img1" width="95%" />
                        </Link>
                    </div>
                    <div className="mt-5 lengIconWithText">
                        <h4 className="ml-2 mr-5">200$</h4>
                        <p className="ml-2 mr-5">Worker Suit</p>
                    </div>
                </Col>

                <Col
                    xs={12}
                    sm={12}
                    md={4}
                    lg={4}
                    className="border-right flexIconWithText"
                >
                    <div className="mt-5 ml-5">
                        <Link to="/detail8">
                            <img src="https://cdn.suitableshop.com/images/221x650/products/14355-1.jpg" alt="vpn" className="img1" width="55%" />
                        </Link>
                    </div>
                    <div className="mt-5 lengIconWithText">
                        <h4 className="ml-2 mr-5">250$</h4>
                        <p className="ml-2 mr-5">Man Suit</p>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={4} lg={4} className="flexIconWithText">
                    <div className="mt-3 ml-3">
                        <Link to="/detail9">
                            <img src="https://image1.masterfile.com/getImage/NjkzLTA2NDAzMjU5ZW4uMDAwMDAwMDA=AKxFmV/693-06403259en_Masterfile.jpg" alt="vpn" className="img1" width="100%" />
                        </Link>
                    </div>
                    <div className="mt-5 lengIconWithText">
                        <h4 className="ml-2 mr-5">250$</h4>
                        <p className="ml-2 mr-5">White Dress</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col
                    xs={12}
                    sm={12}
                    md={4}
                    lg={4}
                    className="border-right flexIconWithText"
                >
                    <div className="mt-4 ml-5">
                        <Link to="/detail10">
                            <img src="https://m.media-amazon.com/images/I/71OFYXYfsJL._UL1500_.jpg" alt="vpn" className="img1" width="100%" />
                        </Link>
                    </div>
                    <div className="mt-5 lengIconWithText">
                        <h4 className="ml-2 mr-5">200$</h4>
                        <p className="ml-2 mr-5">Grey Woman</p>
                    </div>
                </Col>

                <Col
                    xs={12}
                    sm={12}
                    md={4}
                    lg={4}
                    className="border-right flexIconWithText"
                >
                    <div className="mt-5 ml-3">
                        <Link to="/detail11">
                            <img src="https://ae01.alicdn.com/kf/HTB1x19vSFXXXXa6aXXXq6xXFXXXr/Men-workout-clothes-stretch-quick-dry-compression-tights-sport-running-suits-fitness-basketball-jerseys-reflective-outfit.jpg" alt="vpn" className="img1" width="100%" />

                        </Link>
                    </div>
                    <div className="mt-5 lengIconWithText">
                        <h4 className="ml-2 mr-5">250$</h4>
                        <p className="ml-2 mr-5">Black Man</p>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={4} lg={4} className="flexIconWithText">
                    <div className="mt-3 ml-3">
                        <Link to="/detail12">
                            <img src="https://www.looksgud.in/upload/item-image/2274/1cr9u/1cr9u-feel-close-knee-length-one-piece-dress-for-girls-and-ladies_500x500_0.jpg" alt="vpn" className="img1" width="110%" />
                        </Link>
                    </div>
                    <div className="mt-5 lengIconWithText">
                        <h4 className="ml-2 mr-5">250$</h4>
                        <p className="ml-2 mr-5">Black Sport</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default List;