//import statements
const express = require("express");



//configuration
const port = process.env.PORT || 9000; //setting the port to whatever the environment variable PORT is set to or to 9000


//app initialisation
const app = express();


//app middlewares



//app routes
app.get("/", (req, res) => {

    const name = req.query.name;
    res.send(`Welcome!!! ${name}`);
})


//app listen
app.listen(port, () => {console.log(`The server started at port ${port}`)})

