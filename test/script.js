const qfast = require("qfast")


qfast.get("https://jsonplaceholder.typicode.com/posts/1").then(res => console.log(res))

qfast.post("https://jsonplaceholder.typicode.com/posts", {
    title: "Hello"
}, {
    "Content-Type": "application/json"
}).then(res => console.log(res))