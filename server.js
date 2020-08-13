const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(express.json());

const clientRouter = require("./routes/client-routes");
const apiRouter = require("./routes/api-routes");
app.use(clientRouter, apiRouter);

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
})