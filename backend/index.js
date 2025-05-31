import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
const app = express()
const port = process.env.PORT || 8080;


// you can also use arror function like this app.use((req, res, next) => {});
app.use(function(req,res,next){
console.log('chalu hai be mai')
next();
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/tejas', (req, res) =>{
  res.send('ahe mi jivanta');
})



app.listen(port, () => {
  console.log(`Example app listening  ${process.env.DEV_MODE}  mode on port ${port}`)
})
