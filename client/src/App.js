
import './App.css';
import {Link, navigate} from '@reach/router';
import axios from "axios";
// import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayAll from './components/DisplayAll';
import Create from './components/Create';
import { Router } from "@reach/router";
import Details from './components/Details';
import Edit from './components/Edit';

import LogReg from './views/LogReg';
function App() {
  const logout = () => {
    axios.post("http://localhost:8000/api/users/logout", {}, {
      withCredentials: true
    })
      .then((res) => {
        console.log(res.data);
        navigate("/loginRegister/");
      })
      .catch((err) => {
        console.log(err);
      })
  };
  return (
    <div className="App">
      <button onClick={logout}>Logout</button>
      <Router>
     <DisplayAll path = "/solos"/>
   
     <Create  path = "/solos/new" />
     <Details  path = "/solos/:id"/>
     <Edit  path = "/solos/:id/edit"/>
     
     <LogReg path="/loginRegister"/>
     </Router>
    </div>
  );
}

export default App;
