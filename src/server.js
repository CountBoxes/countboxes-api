const express = require("express");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const router = require("./routes");
const app = express();

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(router);
app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}!`);
});