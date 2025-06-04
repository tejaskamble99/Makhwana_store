import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoute from './routes/authRoute.js';

//configuring dotenv
dotenv.config();

//database connection

connectDB();

//rest objects
const app = express()

//middlewares
app.use(morgan('dev'));
app.use(express.json());

const port = process.env.PORT || 8080;


// you can also use arror function like this app.use((req, res, next) => {});
//routes
 app.use('/api/auth', authRoute);
app.use(function(req,res,next){
console.log('chalu hai be mai')
next();
});


// rest api
app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/tejas', (req, res) =>{
  res.send('ahe mi jivanta');
})



app.listen(port, () => {
  console.log(`Example app listening  ${process.env.DEV_MODE}  mode on port ${port}`)
})
