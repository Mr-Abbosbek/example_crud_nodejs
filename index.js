const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 7777;
const appRouter = require("./router");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const cors = require("cors");

app.use(cors())

app.get("/", (req, res) => {
  res.send("Bosh sahifa");
});

app.use("/api", appRouter);

app.listen(port, () =>
  console.log(`Database connected in http://localhost:${port}`)
);
