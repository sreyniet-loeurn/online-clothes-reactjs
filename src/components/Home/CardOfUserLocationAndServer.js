import React, { useEffect, useState,useRef } from "react"
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import {Link, useHistory} from 'react-router-dom';

    const CardOfUserLocationAndServer = () => {
      const [product, setProduct] = useState([]);

        const history = useHistory()
      
      const fetchData = async () => {
        const response = await axios.get("http://localhost/Online-Shop/viewProduct.php");
         setProduct(response.data.viewproduct);
         console.log(response.data.viewproduct);
      }
      
    
      useEffect(() => {
        fetchData()
      }, [])
    
      const deleteProduct = (id) => {
        axios.delete(`http://localhost/online-shop/deleteProduct.php/${id}/delete`).then(function(response){
        history.push('/contact')
        
    });
}
    return (
      <Container className="shadow mt-5 bg-white rounded">
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Product Name</th>
      <th scope="col">Price</th>
      <th scope="col">Description</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {product.map((res) =>
    <tr>
      <th >{res.id}</th>
      <td>{res.name}</td>
      <td>{res.price}</td>
      <td>{res.des}</td>
      <td>
       <Link to={`${res.id}/update`} style={{marginRight: "10px"}}>Detail</Link>
       </td>
    </tr>
    )}
  </tbody>
</table>


      <Row className="p-3 ">
      <Col
          xs={12}
          sm={12}
          md={4}
          lg={4}
          className="border-right flexIconWithText"
        >
          <div className="">
          <img src="https://www.review-australia.com/dw/image/v2/BBBB_PRD/on/demandware.static/-/Sites-review-master-catalog/default/dw42774224/images/RE19DR161_REBLK030_1.jpg?sw=1208&sh=1610&sm=fit" alt="vpn" className="img1" width="102%" />

          <a
              href="#"
              class="btn btn-warning btn-md mt-3 shadow-sm btnGetSart" style={{marginLeft:"100px"}}
            >
              Select
            </a>
          </div>
          <div className="mt-5 lengIconWithText">
            <h4 className="ml-2 mr-5"></h4>
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
          <div className="">
          <img src="https://www.review-australia.com/dw/image/v2/BBBB_PRD/on/demandware.static/-/Sites-review-master-catalog/default/dw42774224/images/RE19DR161_REBLK030_1.jpg?sw=1208&sh=1610&sm=fit" alt="vpn" className="img1" width="102%" />

          <a
              href="#"
              class="btn btn-warning btn-md mt-3 shadow-sm btnGetSart" style={{marginLeft:"100px"}}
            >
              Select
            </a>
          </div>
          <div className="mt-5 lengIconWithText">
            <h4 className="ml-2 mr-5"></h4>
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
          <div className="">
          <img src="https://thumbs.dreamstime.com/b/full-length-portrait-beautiful-full-length-portrait-beautiful-112205501.jpg" alt="vpn" className="img1" width="90%" />

          <a
              href="#"
              class="btn btn-warning btn-md mt-3 shadow-sm btnGetSart" style={{marginLeft:"100px"}}
            >
              Select
            </a>
          </div>
          <div className="mt-5 lengIconWithText">
            <h4 className="ml-2 mr-5">200$</h4>
            <p className="ml-2 mr-5">White​ Dress</p>
          </div>
        </Col>
      </Row>

      <hr></hr>
      <Row className="p-3 ">
        <Col
          xs={12}
          sm={12}
          md={4}
          lg={4}
          className="border-right flexIconWithText"
        >
          <div className="">
          <img src="https://www.jiofab.com/pub/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/b/l/blue-one-piece-western-dress-jf502035-1.jpg" alt="vpn" className="img1" width="90%" />

          <a
              href="#"
              class="btn btn-warning btn-md mt-3 shadow-sm btnGetSart" style={{marginLeft:"100px"}}
            >
              Select
            </a>
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
          <div className="">
          <img src="https://www.jiofab.com/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/b/l/blue-color-one-piece-western-dress-jf502001.jpg" alt="vpn" className="img1" width="90%" />

          <a
              href="#"
              class="btn btn-warning btn-md mt-3 shadow-sm btnGetSart" style={{marginLeft:"100px"}}
            >
              Select
            </a>
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
          <div className="">
          <img src="https://m.media-amazon.com/images/I/41y-g7CySzL.jpg" alt="vpn" className="img1" width="100%" />

          <a
              href="#"
              class="btn btn-warning btn-md mt-3 shadow-sm btnGetSart" style={{marginLeft:"100px"}}
            >
              Select
            </a>
          </div>
          <div className="mt-5 lengIconWithText">
            <h4 className="ml-2 mr-5">200$</h4>
            <p className="ml-2 mr-5">White​ Dress</p>
          </div>
        </Col>
      </Row>
    </Container>
    );
    
    }
  
    


export default  CardOfUserLocationAndServer