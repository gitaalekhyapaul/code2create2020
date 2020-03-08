const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const rootDir = require('./utils/path');

const adminRoutes = require('./routes/admin');
const dashboardRoutes = require('./routes/dashboard');
const getdataRoutes = require('./routes/getdata');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(rootDir, 'public')));

app.use(adminRoutes);
app.use(getdataRoutes);
app.use(dashboardRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

app.listen(3000);