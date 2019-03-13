let express = require('express')
// express.u
var app = express()
app.set('port', 3000)


app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
  });
