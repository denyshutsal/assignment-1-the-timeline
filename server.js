const express = require("express");
require("./config/mongoose");
const app = express();
const route = require("./config/route");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// set the view engine to ejs
app.set("view engine", "ejs");
app.use(route);

let port = 2000;
app.listen(port, console.log(`we are on ${port} port`));
