var express = require('express')
    , app = express();

app.engine('jade', require('jade').__express);
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/', function(request, response) {
  response.render('index');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
