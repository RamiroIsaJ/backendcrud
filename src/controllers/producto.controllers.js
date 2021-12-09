const productoctrl = {};

// logica para obtener lista productos
productoctrl.listarProducto = (req, res)=>{
    res.send('listar productos');
  };

productoctrl.borrarProducto = (req, res)=>{
    res.send('borrar productos');
  };


  export default productoctrl;