const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const indexRoute = require('./routes/index');
const presentRoute = require('./routes/present');
const absentRoute = require('./routes/absent');
const open = require('open');

const host = '127.0.0.1';
const port = 8080;

const hbs = exphbs.create({
    defaultLayout: 'custom',
    extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('views', './views');
app.set('view engine', 'hbs');

app.use(express.urlencoded({extended: false}));
app.use('/', indexRoute);
app.use('/present', presentRoute);
app.use('/absent', absentRoute);

app.listen(port, host, () => console.log(`Server listens http://${host}:${port}`));

open(`http://${host}:${port}`);