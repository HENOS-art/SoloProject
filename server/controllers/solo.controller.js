const Solo = require('../models/solo.model'); 

module.exports={
  getAll:(req,res) =>{
    Solo.find()
    .then((solos )=>res.json(solos))
    .catch((err)=>res.json(err))
},
  
getOne:(req,res) =>{
  console.log(req.params);
  Solo.findById(req.params.id)
  .then((solo)=>res.json(solo))
  .catch((err)=>res.json(err))
},

create:(req,res) =>{
    console.log(req.body);
    Solo.create(req.body)
    .then((newSolo)=>res.json(newSolo))
    .catch((err)=>res.json(err));
},

update :(req, res) => {
  Solo.findOneAndUpdate(req.params.id, req.body, { new: true, runValidators: true, showValidators:true })
  .then(updatedSolo => res.json({ updatedSolo }))
  .catch(err => res.json({  err }));
},

delete:(req,res) =>{
    Solo.findByIdAndRemove(req.params.id)
    .then((deleted)=>res.json(deleted))
    .catch((err)=>res.json(err));
},
};