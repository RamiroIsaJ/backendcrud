import { Router } from "express";
import productoctrl from "../controllers/producto.controllers";

const router = Router();

// crear ruta
router.route('/').get(productoctrl.listarProducto);
router.route('/').delete(productoctrl.borrarProducto);

export default router;