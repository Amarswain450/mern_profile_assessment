const express = require("express");
const { 
    createSectorController, 
    getAllSectorsController 
} = require("../controllers/sectorController");
const router = express.Router();

router.post("/api/create-sector", createSectorController);
router.get("/api/sectors", getAllSectorsController);

module.exports = router;