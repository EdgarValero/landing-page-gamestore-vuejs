const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

const app = express();

//Settings
app.set("port", process.env.PORT || 3000);

//Middlewords
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//Statics Files
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use("/contact", require("./routes/contact.routes.js"));
app.use("/subscription", require("./routes/subs.routes.js"));


//Start Server
app.listen(app.get("port"), () => console.log("Server en el puerto", app.get("port")));