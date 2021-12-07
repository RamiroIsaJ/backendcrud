import express from 'express';

// creo una instancia de express
const app = express();
// crear puerto
app.set('port', process.env.PORT || 4000);
// escuchar el ṕuerto
app.listen(app.get('port'), ()=>{
  console.log('Estoy en el puerto ' + app.get('port'));
})


