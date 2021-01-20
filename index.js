const app = require('./app')

app.set('port', 5000);

app.listen(app.get('port'), () => {
    console.log('App running on port', app.get('port'));
});