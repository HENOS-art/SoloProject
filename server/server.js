// const express = require("express");
// const app = express ();
// const cors = require("cors");
// // const cookieParser = require('cookie-parser');

// app.use( express.json() );
// app.use(cors());
// app.use( express.urlencoded({ extended: true }) );
// // app.use(cookieParser());
// require("./config/mongoose.config");
// require("./routes/solo.routes")(app);
// // require('./routes/user.routes')(app);

// app.listen(8000, () => console.log("Listening on port 8000"));
require("dotenv").config();

const express = require('express');
const app = express();
// inside the server directory, you need to run:
//		npm install cors
const cors = require('cors');
// to be able to read cookies, we need our cookieparser library loaded
const cookieParser = require('cookie-parser');

// server configuration first
app.use(express.json());
app.use(express.urlencoded({
	extended: true,
}));
// to allow our browser to request things from our API, we must 
//		add the cors functionality to our express server
// when using credentials and cookies, we need to add options to our cors
//		configuration
app.use(cors({
	credentials: true,
	origin: "http://localhost:3000",
}));
app.use(cookieParser());

// run the Mongoose connect file
require('./config/mongoose.config');


// Routes next 

// require pulls in the function we created in routes
//	then it invokes the function with the app express server as an argument
require('./routes/solo.routes')(app);
require('./routes/user.routes')(app);

// another way to run the routes file for the app server
// const userRoutes = require('./routes/users.routes');
// userRoutes(app);


// start server listening for requests
app.listen(process.env.MY_PORT, () => { 
    console.log("Listening at Port " + process.env.MY_PORT) 
})