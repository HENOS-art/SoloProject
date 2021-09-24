import React, {useState,useEffect} from "react";
import axios from 'axios';
import {Link, navigate} from '@reach/router';
const Details= (props) => {
	
	const [data, setData ] = useState({});
	const [likes, setLikes ] = useState(0);

	
	useEffect(() => {
		
		axios.get("http://localhost:8000/api/solos/" + props.id   )
			.then((res) =>setData(res.data))
			.catch((err) => console.log(err));
				

	},[props.id] );
	const deleteData =()=>{
        
   axios.delete("http://localhost:8000/api/solos/" + props.id)
		.then((res) =>navigate("/solos/"))
		.catch((err) => console.log(err));
	};
    return (
		<div className="box">
			<div className="bar">
            <Link to = { "/solos/" }>
								
								back to home 
								</Link>
				
			</div>
			
			

			<table >  
				 <h3> <b className="gold">Gold Awards of  </b>{data.host}</h3>
		 <tr>
    <th><b>Name</b></th>
    <th><b>Country</b></th>
	<th ><b>Type</b></th>
  </tr>
			<tbody>
				
					<tr >
                     <td>
						 <p><b>{data.name}</b></p>
					 </td>
					 <td>
						 <p><b>{data.country}</b></p>
					 </td>
					 <td>
					 <p><b>{data.type}</b></p>
					 </td>
					</tr>
					
					
				
			</tbody>
					
				</table>
			<button onClick= { deleteData} >Delete</button>   
			<button onClick={(event)=>setLikes(likes + 1) }>like {data.name}</button> 
			<p className><b>likes:</b>               {likes}</p>
				
          
            
			


			
			
		
			 
		</div>
	)
}

export default Details;