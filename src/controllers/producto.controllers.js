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
          message: "Error al acceder a los recursos"
      })
    }
  };

productoctrl.borrarProducto = (req, res)=>{
    res.send('borrar productos');
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
  };
  export default productoctrl;