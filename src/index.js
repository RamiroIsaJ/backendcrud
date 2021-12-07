import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

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

// agregar rutas
app.get('/', (req, res)=>{
  res.send('hola desde el servidor');
});

app.delete('/borrar', (req, res)=>{
  res.send('aquí se borrará datos');
});