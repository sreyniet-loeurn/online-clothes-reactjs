import React, {useState} from "react";
import { Card } from "react-bootstrap";
import axios from "axios";

export default function ListUser() {
    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
  

const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost/online-shop/addProduct.php', inputs).then(function(response){
        console.log(response.data);
    });
}
    return (
          <div className="mt-5">

{/* <div className="col-sm-4 offset-sm-4">
<Card>
<h3 className="text-center text-primary">Add Product</h3>
<Card.Body>
<input type="text" placeholder="product name" className="form-control"/>
<br />
<input type="password" placeholder="price" className="form-control"/>

<br />
<input type="password" placeholder="description" className="form-control"/>
<button>Save</button>

<br />
</Card.Body>
</Card>
</div> */}
            <h1>Create user</h1>
            <form onSubmit={handleSubmit}>
                <table cellSpacing="10">
                    <tbody>
                        <tr>
                            <th>
                                <label>Name: </label>
                            </th>
                            <td>
                                <input type="text" name="name" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Email: </label>
                            </th>
                            <td> 
                                <input type="text" name="price" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Mobile: </label>
                            </th>
                            <td>
                                <input type="text" name="des" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" align ="right">
                                <button>Save</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}