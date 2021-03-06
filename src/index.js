import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import router from './routes/producto.routes';
import './database';

// creo una instancia de express
const app = express();
// crear puerto
app.set('port', process.env.PORT || 4000);
// escuchar el ṕuerto
app.listen(app.get('port'), ()=>{
  console.log('Estoy en el puerto ' + app.get('port'));
});

// middlewares o configuraciones extras
app.use(morgan('dev')); // da información extra a la terminal
app.use(cors()); // se encarga de recibir peticiones externas
// permite recibir objetos en formato JSON
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// mostrar una pagina por defecto
app.use(express.static(path.join(__dirname, '../public')));

// agregar rutas
app.use('/apicrud', router);


/*
app.get('/', (req, res)=>{
  res.send('hola desde el servidor');
});

app.delete('/borrar', (req, res)=>{
  res.send('aquí se borrará datos');
});*/
