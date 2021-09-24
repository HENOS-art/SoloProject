import React, { useState,useEffect } from 'react';
import axios from 'axios';

import {Link, navigate} from '@reach/router';
const Edit = (props) => {
// const { id } = props;
const [errors,setErrors] =useState({});
const [data, setData] = useState({}); 
useEffect(() => {
		
    axios.get("http://localhost:8000/api/solos/" + props.id   )
        .then((res) =>setData(res.data))
        .catch((err) => console.log(err));
            

},[] );

const update = e => {
    
    e.preventDefault();
    
    axios.put("http://localhost:8000/api/solos/" + props.id, data )
      
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
    <div>
         <Link to = { "/solos/" }className="bar">
								
								back to home 
								</Link>

        <p><b>Edit </b></p>
    <form onSubmit={ (e) => update(e) }className="box2">
    <div >
                <label ><b> Host:</b> </label>
                
         {
                errors.host?
                <span className="error-text">{errors.host.message}</span>
                :null
            }
             <br/>
                <input
                    type="text"
                    name="host"
                    value={ data.host }
                    onChange={ (e) => inputChange(e) }
                    />
                    
            </div>
       
            <div>
                <label><b>Name</b></label>
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
                <label><b> country</b></label>
                <br/>
                {
                    errors.country ?
                        <span className="error-text">{errors.country.message}</span>
                        : null
                }
                <input
                    type="text"
                    name="country"
                    value={ data.country }
                    onChange={ (e) => inputChange(e) }
                    />
                      </div>
                      <div>
                <label><b> Type</b></label>
                <br/>
                {
                    errors.type ?
                        <span className="error-text">{errors.type.message}</span>
                        : null
                }
                <input
                    type="text"
                    name="type"
                    value={ data.type }
                    onChange={ (e) => inputChange(e) }
                    />
                      </div>
                      
                    
                      <Link to={"/solos/"}>
				<button>cancel</button>
			</Link>
                   
            
            <button type="submit">Edit </button>
           
          
        </form>
    </div>
      
)
}

export default Edit;