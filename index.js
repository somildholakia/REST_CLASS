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
        username: "somil",
        content: "I love coding",
    },
    {
        username: "ritik",
        content: "I love coding",
    },
    {
        username: "vivek",
        content: "I love coding",
    },
    {
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
    res.send("post request working")
})