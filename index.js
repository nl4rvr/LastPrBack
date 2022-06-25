const express = require('express');
require('dotenv').config();
require('./models/models');

const cors = require('cors');
const router = require('./routers/router');

const sequelize = require('./db');
const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/router', router);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log('Server started...');
    });
  } catch (ERROR) {
    console.log(ERROR);
  }
};

start();
