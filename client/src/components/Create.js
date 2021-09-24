import React, { useState } from 'react'
import axios from 'axios';

import {Link, navigate} from '@reach/router';
const Create = (props) => {
const [ errors,setErrors] =useState({});
const [data, setData] = useState({
    host:"",
    name:" ",
    country:"",
    type :"",
    imageUrl:""
    
}); 
const countrys=  [
    "USA",
    "China",
    "kenya",
    "Uganda",
    "England",
    "Eritrea",
    "Japan",
    "Rusia"
];

const handleSubmit = e => {
    
    e.preventDefault();
    
    axios.post('http://localhost:8000/api/solos/new',data )
      
    .then((res) => {
        console.log(res.data);
        
        if(res.data.errors) {
            setErrors(res.data.errors);
        }
        else {
            
            navigate("/solos");
        }
    })
    .catch((err) => {
        
        console.log(err);
    })
}

const inputChange = (e) => {
    console.log("input name: " + e.target.name);
    console.log("input value: " + e.target.value);
    let newDataObject = { ...data};
    newDataObject[e.target.name] = e.target.value;
    setData(newDataObject);
}

return (
    <div className="box">
      
      
    <form onSubmit={ (e) => handleSubmit(e) }>
        <div className="nav1">
       <div >
                <label ><b>Olympic Host Cities:</b> </label>
                <br/>
                
         {
                errors.host?
                <span className="error-text">{errors.host.message}</span>
                :null
            }
             
                <input
                    type="text"
                    name="host"
                    value={ data.host }
                    onChange={ (e) => inputChange(e) }
                    />
                    
            </div>
            <div>
                <label><b>  Name:</b></label>
                <br/>
                {
                    errors.name ?
                        <span className="error-text">{errors.name.message}</span>
                        : null
                }
                 
                <input
                    type="text"
                    name="name"
                    value={ data.name }
                    onChange={ (e) => inputChange(e) }
                    />
            </div>
            <div>
            <label><b>Country</b></label>
            <br/>
					{
						errors.country ?
							<span className="error-text">{errors.country.message}</span>
							: null
					}
					<select
						name="country"
						value={ data.country }
						onChange={ (e) => inputChange(e) }
						>
							<option value=""></option>
							{
								countrys.map((dataCountry) => (
									<option value={dataCountry} key={dataCountry}>{dataCountry}</option>
								))
							}
					</select>
				
                      </div>
                     
                      <div>
                <label><b> Sport Type:</b></label>
               
                {
                    errors.type ?
                        <span className="error-text">{errors.name.message}</span>
                        : null
                }
                 <br/>
                <input
                    type="text"
                    name="type"
                    value={ data.type }
                    onChange={ (e) => inputChange(e) }
                    className="input1"/>
            </div>
            
            </div>
            <button type="submit">Submit </button>
           
           
                                <Link to={"/solos/"}>
				<button>cancel</button>
			</Link>
        </form>
    </div>
      
)
}

export default Create;