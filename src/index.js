import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

//creo una instancia de express
const app = express();   

//crear un puerto
app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), ()=>{
   console.log('Estoy en el puerto '+ app.get('port')); 
})

//middlewares o configuraciones extras
app.use(morgan('dev')); //info extra en la terminal
app.use(cors()); //acepta peticiones remotas o externas
//interpretar objetos en formato json
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// ruta de prueba
app.get('/products', (req, res)=>{
   //lo que quiero que pase cuando se ejecute esta consulta
   res.send('hola desde el backend')
} )

app.get('/', (req, res)=>{
   //lo que quiero que pase cuando se ejecute esta consulta
   res.send('esta es la ruta principal')
} )