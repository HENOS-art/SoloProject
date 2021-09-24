const mongoose = require('mongoose');

const SoloSchema = new mongoose.Schema(
    {
    host : { type: String ,
        required: [ true, "host is required for solos" ],
        minlength:3[ 3, "host must be atleast 3 characters long" ]},
    name: { type: String ,
            required:[ true, "Name is required for soloss" ],
            minlength:[ 3, "Name must be atleast 3 characters long" ],},
    country: { 
                type: String,
                required: [ true, "Country is required for solos" ],
                minlength:3},
    type: { type: String, 
        required:[ true, " type is required for solos" ],
        minlength:7[ 3, "type must be atleast 7 characters long" ]},

   
},
   
 { timestamps: true });

const Solo = mongoose.model("Solo",SoloSchema); 
module.exports = Solo;