const express = require("express");
const app = express();
const path = require("path");

const {v4: uuid, v4} = require("uuid");


app.use(express.urlencoded({extended: true}));
app.use(express.json());


const port = 8080;
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));


app.listen(port,()=> {
    console.log(`Listening at port: ${port}`);
})

let posts = [
    {
        id: uuid(v4),
        username: "somil",
        content: "I love coding",
    },
    {
        id: uuid(v4),
        username: "ritik",
        content: "I love coding",
    },
    {
        id: uuid(v4),
        username: "vivek",
        content: "I love coding",
    },
    {
        id: uuid(v4),
        username: "krishna",
        content: "I love coding",
    },

];

app.get("/posts", (req,res) => {
    res.render("index.ejs",{posts})
})

app.get("/posts/new", (req,res) => {
    res.render("new.ejs")
})

app.post("/posts", (req,res) => {
    let {username,content} = req.body;
    let id = uuid(v4);
    posts.push({ id,username, content})
    res.redirect("/posts")
})

app.get("/posts/:id", (req,res) => {
    let {id} = req.params
    let post = posts.find((p) => id === p.id)
    console.log(post)
    res.render("show.ejs", {post})
})