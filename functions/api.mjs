import express from "express";
import serverless from "serverless-http";

const app = express();

app.get("/", (req, res) => {
    res.send("Serverdan salom!");
});

app.get("/about", (req, res) => {
    res.json({
        name: "Jamol",
        surname: "Isaboyev",
        age: 20,
    });
});

export const handler = serverless(app);