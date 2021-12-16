import Producto from "../models/producto";

const productoctrl = {};

// logica para obtener lista productos
productoctrl.listarProducto = async (req, res)=>{
    // res.send('listar productos');
    try{
      const listaProductos = await Producto.find();
      res.status(200).json(listaProductos);

    }catch(error){
      res.status(404).json({
          message: "Error al acceder a los productos"
      });
    }
  };

productoctrl.crearProducto = async (req, res)=>{
    // res.send('crear productos');
    console.log(req.body);
    try{
      // validar 
      // crear objeto para la DB
      const productoNuevo = new Producto({
        nombreProducto: req.body.nombreProducto,
        precioProducto: req.body.precioProducto,
        categoria: req.body.categoria
      });
      // transaccion a la DB con await
      await productoNuevo.save();
      // enviar respuesta
      res.status(200).json({
          message: 'Producto guardado correctamente'
      });

    }catch(error){
      console.log(error);
      res.status(400).json({
        message: 'Error al agregar un producto'
      });
    }
  }

productoctrl.obtenerProducto = async (res, req) =>{
    try{
      //obtener parametro de la ruta
      console.log(req.params.id)
      // crear objeto y lo busco en DB
      // const productoBuscado = await Producto.findById(req.params.id);
      // res.status(200).json(productoBuscado);

    }catch(error){
      console.log(error);
      res.status(404).json({
        message: "Error al acceder a al producto"
      });
    }
  }

productoctrl.borrarProducto = async (res, req) =>{
    try{
      // buscar producto y borrarlo
      await Producto.findByIdAndDelete(req.params.id);
      res.status(200).json({
        message: "Se borró correctamente"
      });
    }catch(error){
      console.log(error);
      res.status(404).json({
        message: "Error al acceder a al producto"
      });
    }

  }


productoctrl.editarProducto = async (res, req) =>{
  try{
    // buscar producto 
    await Producto.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      message: "Se modificó el producto correctamente"
    });

  }catch(error){
    console.log(error);
    res.status(404).json({
      message: "Error al acceder a al producto"
    });
  }
}

  export default productoctrl;