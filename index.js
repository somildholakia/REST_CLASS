const express = require("express");
const app = express();
const path = require("path");

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
        id: "1a",
        username: "somil",
        content: "I love coding",
    },
    {
        id: "2a",
        username: "ritik",
        content: "I love coding",
    },
    {
        id: "3a",
        username: "vivek",
        content: "I love coding",
    },
    {
        id: "4a",
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
    posts.push({ username, content})
    res.redirect("/posts")
})

app.get("/posts/:id", (req,res) => {
    let {id} = req.params
    let post = posts.find((p) => id === p.id)
    console.log(post)
    res.render("show.ejs", {post})
})