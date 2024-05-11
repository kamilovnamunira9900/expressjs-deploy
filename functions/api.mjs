import express from "express";
import serverless from "serverless-http";

const app = express();

app.get("/", (req, res) => {
    res.send("Serverdan salom!");
});

app.get("/about", (req, res) => {
    res.json({
        name: "Munira",
        surname: "Haqberdiyeva",
        age: 23,
    });
});

export const handler = serverless(app);