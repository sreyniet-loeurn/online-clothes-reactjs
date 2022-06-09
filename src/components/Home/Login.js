import React, {useState, setEffect, useEffect } from "react";
import { Card } from "react-bootstrap";
import {Link, useHistory} from 'react-router-dom';

function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const history = useHistory();
  useEffect(()=>{
    if(localStorage.getItem('user-info')) {
      history.push("/")

    }
  },[])
  async function login() {
    // console.warn(email,password);
    let item = {email,password};
    let result = await fetch("http://localhost/online-shop/login.php",{
      method:'POST',
      headers:{
        "Content-Type": "application/json; charset=UTF-8",
        "Accept": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(item)
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result))
    if(result.email){
      history.push("/");
      // alert(result.email);
   }else{
     alert("Login Fail!");
   }
  }
  
  return (
    <div className="mt-5">

      <div className="col-sm-4 offset-sm-4">
      <Card>
      <h3 className="text-center">Login</h3>
      <Card.Body>
      <input type="text" placeholder="email" className="form-control"
      onChange={(e) =>setEmail(e.target.value)}/>
<br />
      <input type="password" placeholder="password" className="form-control"
      onChange={(e) =>setPassword(e.target.value)}/>

<br />
  <button onClick={login} className="btn btn-success">Login</button>
  <button className="btn btn-danger"  style={{ marginLeft: "58%" }}>Register</button>
  </Card.Body>
      </Card>
      </div>
    </div>

  );
};

export default Login;
