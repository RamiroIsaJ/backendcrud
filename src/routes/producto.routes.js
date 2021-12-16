import { Router } from "express";
import productoctrl from "../controllers/producto.controllers";

const router = Router();

// crear ruta
router.route('/')
.delete(productoctrl.borrarProducto)
.post(productoctrl.crearProducto)
.get(productoctrl.listarProducto);

router.route('/:id')
.get(productoctrl.obtenerProducto)
.delete(productoctrl.borrarProducto)
.put(productoctrl.editarProducto);

export default router;