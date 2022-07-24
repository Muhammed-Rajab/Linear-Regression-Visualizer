const fs = require("fs");
const express = require("express");

const app = express();

app.use(express.static(`${__dirname}/public`));

app.route("/").get((req, res) => {
    fs.readFile(`${__dirname}/public/index.html`, "utf-8", (err, data) => {
        res.set("Content-Type", "text/html");
        res.status(200).send(data);
        return;
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server started!!");
});
