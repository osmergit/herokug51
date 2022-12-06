import express from 'express';
import {db} from './basedatos.js'
import {shevento} from './controllers/eventcontrollers.js'

const router= express.Router();
const app = express();

app.use('/',router);

app.use('/eventos', shevento)

router.get('/', (req,res) => {
    res.send("🚀😎 Deploy en Heroku🚀🚀")
})

var PORT = process.env.PORT || 8000;
app.listen(PORT, ()=> {
    console.log(`Conectado en el servidor: http://localhost:${PORT}`)
})