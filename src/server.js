const express = require("express");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const app = express();

const router = require("./routes");

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(router);
app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}!`);
});