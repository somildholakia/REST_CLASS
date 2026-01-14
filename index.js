const express = require("express")
const app = express();
const path = require("path");
// let { uuid:v4 } = require("uuid");

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));


let posts = [
    {
        // id: uuid(v4),
        user: "Somil",
        content: "I like coding",
    },
    {
        // id: uuid(v4),
        user: "ritik",
        content: "I like coding",
    },
    {
        // id: uuid(v4),
        user: "krishna",
        content: "I like coding",
    },
    {
        // id: uuid(v4),
        user: "vivek",
        content: "I like coding",
    },
]


const port = 8080;

app.listen(port, () => {
    console.log(`Listening at port:${port}`)
})

app.get("/posts", (req,res) => {
    res.render("index.ejs",{ posts });
})

