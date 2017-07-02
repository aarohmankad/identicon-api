const
	express = require('express'),
	bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
let app = express();

app.use(bodyParser.urlencoded({
	extended: true,
}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,origin,content-type,accept');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

require('./routes')(app);

app.listen(port);
console.log(`Magic happens on port: ${port}`);
