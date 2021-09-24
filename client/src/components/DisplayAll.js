import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';


const DisplayAll= (props) => {
	
	const [datas, setDatas ] = useState([]);

	
	useEffect(() => {
		
		axios.get("http://localhost:8000/api/solos")
			.then((res) => {
				console.log(res.data);
				
				setDatas(res.data);
			})
			.catch((err) => {
				console.log(err);
			});

	}, []);


	return (
		<div>
			  <div  className="box">
                  
			<Link to={"/solos/new"}className="bar1">
				<button>Add a New</button>
			</Link>
			
        

             
		 <table >  
		 <tr>
    <th><b>Name</b></th>
    <th><b>Country</b></th>
	<th ><b>Data</b></th>
  </tr>
			<tbody>
				{
					datas.map((data,index)=>
					<tr key={ index }>
                     <td>
						 <p><b>{data.name}</b></p>
					 </td>
					 <td>
						 <p><b>{data.country}</b></p>
					 </td>
					 <td>
					 
             <Link to={"/solos/" + data._id}>
				<button>Details </button>
			</Link>
            		 
            <Link to={"/solos/" + data._id+ "/edit"}>
				<button>Edit </button>
			</Link>
                               
                         
					 </td>
					</tr>
					
					)
				}
			</tbody>
					
				</table>
			
				
							
			</div>

				    
		</div>
	)
}

export default DisplayAll;