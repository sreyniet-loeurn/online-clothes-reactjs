// import axios from "axios";
// import React, { useState } from "react";
// import { Form, Button, Card, Col, Container, Row } from "react-bootstrap";
// import { Link, useHistory } from 'react-router-dom';

// export const SignUp = () => {
//   const history = useHistory();
//   const [data,setData] = useState({
//     name: "",
//     email: "",
//     password: ""
//   })
//   const handleChange = (e) => {
//     setData({...data, [e.target.name]: e.target.value});
//     // console.log(data)
//   }
//   const SubmitForm=(e) =>{
//     e.preventDefualt();
//     const sendData = {
//       name:data.name,
//       email:data.email,
//       password:data.password
//     }
//     console.log(sendData);
//     axios.post('http://localhost/online-shop/login.php',sendData)
//     .then((result)=>{
//       if(result.data == 'Invalid') {
//         alert('Invalid User')
//       }
//       else {
//         console.log(sendData);
//       }
//     })
//   }
//   return (
//     <Container id="main-container" className="d-grid h-100 mt-5 p-5 ">
//       <Row >
//         <Col></Col>
//         <Col >
//           <Card>
//             <Card className=" fw-normal  text-center bg-warning"> <h4 className="">Sing Up </h4></Card>

//             <Form id="sign-in-form" onSubmit={SubmitForm} className="text-center p-3 w-100   ">
//               {/* <Form.Group controlId="sign-in-email-address "  className="mt-3" > */}
//                 <input type="text" name="name" className="form-control" placeholder="name"
//                 onChange={handleChange} value ={data.name}/>
//                 {/* <Form.Control type="text" size="small" placeholder="Name" autoComplete="username" className="position-relative" /> */}
//               {/* </Form.Group> */}
        
//               {/* <Form.Group controlId="sign-in-email-address " className="mt-3" > */}
//               <input type="text" name="email" placeholder="email address" className="form-control" 

//               onChange={handleChange} value ={data.email} />

//                 {/* <Form.Control type="email" size="small" placeholder="Email address" autoComplete="username" className="position-relative" /> */}
//               {/* </Form.Group> */}
//               {/* <Form.Group className="mb-3" controlId="sign-in-password"> */}
//               <input type="text" name="password" placeholder="password" className="form-control" 
//                 onChange={handleChange} value ={data.password}/>
//                 {/* <Form.Control type="password" size="small" placeholder="Password" autoComplete="current-password" className="position-relative" /> */}
//               {/* </Form.Group> */}

//               {/* <Form.Group className=" d-flex justify-content-md-between" controlId="remember-me"> */}
//                 {/* <Form.Check label="Remember me" /> */}
//                 <a href="" className="text-dark " style={{ fontSize: "20px", fontFamily: "serif", }}><Link to="/Login" className="text-dark" >Please Login!!!</Link>  </a>

//                 <input type="submit" value="Register" variant="success" />
//                 {/* <Button variant="success " className="text-light" size="md"  >
//                   Sing Up
                  
//                 </Button> */}
//               {/* </Form.Group> */}

//               <div className="d-grid ">
//               </div>
//             </Form>
//           </Card >
//         </Col>

//         <Col></Col>
//       </Row>
//     </Container>
//   );
// };

// export default SignUp;
