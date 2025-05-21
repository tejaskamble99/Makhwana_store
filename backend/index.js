import express from 'express'
import Color from 'color';
const app = express()
const port = 5000


// you can also use arror function like this app.use((req, res, next) => {});
app.use(function(req,res,next){
console.log('chalu hai be mai')
next();
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/tejas', (req, res) =>{
  res.send('hi laude');
})









app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
