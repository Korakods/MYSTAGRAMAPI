
const PORT = process.env.PORT || 8080;
const express = require('express');
const hbs = require('express-handlebars');
const router = require('./routes/index');
const app = express();
const path = require('path');
app.engine('hbs', hbs({ extname: 'hbs' }));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router);
app.listen(
    PORT,
    () => {
        console.log(`Listening to port 8080`);
    }
);