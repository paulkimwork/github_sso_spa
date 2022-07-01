const express = require("express");
const bodyParser = require("body-parser");
const FormData = require("form-data");
const fetch = require("node-fetch");
var cors = require('cors')
const { client_id, redirect_uri, client_secret } = require("./config");

const config = require("./config");

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.json({ type: "text/*" }));
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/authenticate", (req, res) => {

    const { code } = req.body;
    const data = new FormData();
    data.append("client_id", client_id);
    data.append("client_secret", client_secret);
    data.append("code", code);
    data.append("redirect_uri", redirect_uri);

    fetch(`https://github.com/login/oauth/access_token`, {
        method: "POST",
        body: data,
    })
        .then((response) => response.text())
        .then((paramsString) => {
            let params = new URLSearchParams(paramsString);
            const access_token = params.get("access_token");

            return fetch(`https://api.github.com/user`, {
                headers: {
                    Authorization: `token ${access_token}`,
                },
            });
        })
        .then((response) => response.json())
        .then((response) => {
            return res.status(200).json(response);
        })
        .catch((error) => {
            return res.status(400).json(error);
        });
});

app.get("/", (req, res) => {

})

const PORT = process.env.SERVER_PORT;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
