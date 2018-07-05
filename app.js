const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const uuid = require("uuid/v4");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require('cors')

app.use(cors());

app.disable('x-powered-by');
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
app.use(bodyParser.json());

const blogRoutes = require("./src/routes/routes");
app.use("/blog", blogRoutes);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).send({
    error: err
  });
})

app.use((req, res, next) => {
  res.status(404).send({
    error: {
      status: 404,
      message: `Not Found`
    }
  })
})

const listener = () => console.log(`Listening to port ${port}`)
app.listen(port, listener);

module.exports = app;
