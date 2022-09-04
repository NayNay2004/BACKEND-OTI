import express from "express";
import { getDatas, 
    getDataById, 
    saveData, 
    updateData,
    deleteData } from "../controllers/productController.js";

   
const router = express.Router();


router.get('/', getDatas);

router.get('/:id', getDataById);

router.post('/', saveData);

router.patch('/:id', updateData);

router.delete('/:id', deleteData);


export default router;

