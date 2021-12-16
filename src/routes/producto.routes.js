import { Router } from "express";
import productoctrl from "../controllers/producto.controllers";

const router = Router();

// crear ruta
router.route('/')
.delete(productoctrl.borrarProducto)
.post(productoctrl.crearProducto)
.get(productoctrl.listarProducto);

export default router;