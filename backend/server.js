const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config()

/* Routes */
const usaRoutes = require('./routes/usaModels.routes');
const germanyRoutes = require('./routes/germanyModels.routes');
const ussrRoutes = require('./routes/ussrModels.routes');
const franceRoutes = require('./routes/franceModels.routes');
const gbRoutes = require('./routes/gbModels.routes');
const polandRoutes = require('./routes/polandModels.routes');

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* API ENDPOINTS */
app.use('/api', usaRoutes);
app.use('/api', germanyRoutes);
app.use('/api', ussrRoutes);
app.use('/api', franceRoutes);
app.use('/api', gbRoutes);
app.use('/api', polandRoutes);

/* API ERROR PAGES */
app.use('/api', (req, res) => {
  res.status(404).send({ post: 'Not found...' });
});

/* REACT WEBSITE */
app.use(express.static(path.join(__dirname, '../build')));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

/* MONGOOSE */
const DBConnect = (login, pass) => {
  if (!process.env.DB_USER || !process.env.DB_PASS) {
    login = process.env.Log;
    pass = process.env.Pas;
    return `${login}:${pass}`;
  } else {
    login = process.env.DB_USER;
    pass = process.env.DB_PASS;
    return `${login}:${pass}`;
  }
}

const dbURI = 'mongodb+srv://Caster22:polska22@cluster0.hud0b.mongodb.net/TankModelsDB?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.once('open', () => {
  console.log('Successfully connected to the database');
});
db.on('error', err => console.log('Error: ' + err));

/* START SERVER */
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('Server is running on port: '+port);
});
