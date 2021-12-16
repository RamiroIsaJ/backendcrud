import mongoose from 'mongoose';

// cadena de conexion a la base de datos
const url = 'mongodb://localhost:27017/CRUD_Cafe';

mongoose.connect(url, {useNewUrlParser:true});

const connection = mongoose.connection;

connection.once('open', ()=> {
    console.log('DB connected')
});
