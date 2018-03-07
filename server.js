const express = require('express');
const morgan = require('morgan');
const proxy = require('express-http-proxy');
const path = require('path');
const app = express();
const $ = require('jquery')
const bodyParser = require('body-parser')

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/highlights/reviews/:id', proxy('http://localhost:3003/highlights/reviews/:id', {
  proxyReqPathResolver: function(req) {
    return `http://localhost:3003/highlights/reviews/` + req.params.id;
  }
}));

app.use('/reviews/reviews/:id', proxy('http://localhost:3004/reviews/reviews/:id', {
  proxyReqPathResolver: function(req) {
    return `http://localhost:3004/reviews/reviews/` + req.params.id;
  }
}));

app.use('/reviews/user/:id', proxy('http://localhost:3004/reviews/user/:id', {
  proxyReqPathResolver: function(req) {
    return `http://localhost:3004/reviews/user/` + req.params.id;
  }
}));

app.use('/highlights/photos/:id', proxy('http://localhost:3003/highlights/photos/:id', {
  proxyReqPathResolver: function(req) {
    return `http://localhost:3003/highlights/photos/` + req.params.id;
  }
}));

app.use(
  "/sidebar/business/:id",
  proxy("http://localhost:3002/sidebar/business/:id", {
    proxyReqPathResolver: function(req) {
      return "http://localhost:3002/sidebar/business/" + req.params.id;
    }
  })
);
app.use(
  "/sidebar/postalCode/:code",
  proxy("http://localhost:3002/sidebar/postalCode/:code", {
    proxyReqPathResolver: function(req) {
      return "http://localhost:3002/sidebar/postalCode/" + req.params.code;
    }
  })
);
app.use(
  "/sidebar/businessTips/:id",
  proxy("http://localhost:3002/sidebar/businessTips/:id", {
    proxyReqPathResolver: function(req) {
      return "http://localhost:3002/sidebar/businessTips/" + req.params.id;
    }
  })
);

app.get('/map-and-images/business/:id', proxy('http://localhost:3001/map-and-images/business/:id', {
  proxyReqPathResolver: function(req) {
    return 'http://localhost:3001/map-and-images/business/' + req.params.id;
  }
}));

app.get('/map-and-images/business/:id/photos', proxy('http://localhost:3001/map-and-images/business/:id/photos', {
  proxyReqPathResolver: function(req) {
    return 'http://localhost:3001/map-and-images/business/' + req.params.id + '/photos';
  }
}));

app.get('/:id', function(req, res){
  res.sendFile(path.join(__dirname + '/public/index.html'));
})

app.listen(3000, function(){
  console.log('proxy server is live on port 3000!')
})
