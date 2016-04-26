const express = require('express')
    , app = express()
    , PORT = process.env.PORT || 3000
    , Controllers = require('./controllers');


app.set('view engine', 'jade');

app.set('views', __dirname + '/views');

Controllers().initialize(app);

app.listen(PORT, () => {
    console.log('Server Listening on PORT: ' + PORT);
});