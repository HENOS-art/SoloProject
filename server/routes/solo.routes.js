const SoloController = require("../controllers/solo.controller");
const { authenticate } = require('../config/jwt.config');
module.exports = (app) =>{
    
    app.get("/api/solos", SoloController.getAll);
    app.post("/api/solos/new", SoloController.create);
    app.get("/api/solos/:id" , SoloController.getOne);
    app.put("/api/solos/:id", SoloController.update);
    app.delete("/api/solos/:id" , SoloController.delete);
   
};