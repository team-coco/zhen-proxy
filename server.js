const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const $ = require('jquery')

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/:id', function(req, res){
  // $.ajax({
  //   url: 'http://127.0.0.1/3003/rl137V_5Hx0cJAV4beVdhA',
  //   headers: {
  //     'Access-Control-Allow-Origin': '*'
  //   },
  //   type: 'GET',
  //   success: (data) => {
  //     res.send(data)
  //   },
  //   error: () => {
  //     console.log('error!')
  //   }
  // })
  res.sendFile(path.join(__dirname + '/public/index.html'));
})

app.listen(8080, function(){
  console.log('proxy server is live on port 8080!')
})
