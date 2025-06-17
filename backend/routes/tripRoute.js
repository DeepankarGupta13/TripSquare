import express from "express";
import { listTrip, addTrip, removeTrip, singleTrip, updateTrip } from "../controllers/tripController.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

const tripRouter = express.Router();

tripRouter.post('/add', adminAuth, upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
    { name: "image5", maxCount: 1 },
    { name: "image6", maxCount: 1 },
    { name: "image7", maxCount: 1 },
    { name: "image8", maxCount: 1 },
    { name: "image9", maxCount: 1 },
    { name: "image10", maxCount: 1 },
]), addTrip);

tripRouter.post('/remove', adminAuth, removeTrip);

tripRouter.put('/update/:id', adminAuth, upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
    { name: "image5", maxCount: 1 },
    { name: "image6", maxCount: 1 },
    { name: "image7", maxCount: 1 },
    { name: "image8", maxCount: 1 },
    { name: "image9", maxCount: 1 },
    { name: "image10", maxCount: 1 },
]), updateTrip);

tripRouter.get('/single/:id', singleTrip);

tripRouter.get('/list', listTrip);

export default tripRouter;