const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({extended: false});

app.set('views','views');
app.set('view engine', 'hbs');
app.use(express.static('public'));


app.get('/contacts', function(request, response){
    response.render('contact_us');
});
app.get('/', function(request, response){
    response.render('bmi');
})


app.post('/process-contacts', urlEncodedParser, function(request, response){
    response.end('Thankyou ' +request.body.first_name + ' ' +request.body.last_name);
});

app.post('/bmi-results', urlEncodedParser, function(request, response){
    response.end('Your height is '+request.body.height+ ' and weight is '+request.body.weight);
})

app.listen(port);
console.log(`Server is listening on port ${port}`);