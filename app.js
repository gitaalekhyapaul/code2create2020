const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const rootDir = require('./utils/path');

const adminRoutes = require('./routes/admin');
const dashboardRoutes = require('./routes/dashboard');
const getdataRoutes = require('./routes/getdata');
const nodeapiRoutes = require('./routes/nodeapi');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use(express.static(path.join(rootDir, 'public')));

app.use(adminRoutes);
app.use(getdataRoutes);
app.use(nodeapiRoutes);
app.use(dashboardRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

app.listen(3000, () => {
    console.log("Server live at port 3000")
});