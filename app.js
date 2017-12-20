const express = require('express')
const http = require('http')
const path = require('path')

//const api=require('./server/routes/api');
const app = express()

app.use(express.static(path.join(__dirname,'dist')));

app.get('*',  (req, res)=> {
  res.send(path.join(__dirname,'dist/index.html'));});//se debe compilar ng build --env=prod

const port=process.env.PORT || '3002';
app.set('port',port);
const server= http.createServer(app);

server.listen(port,()=>console.log('Spotizack App running!'));
