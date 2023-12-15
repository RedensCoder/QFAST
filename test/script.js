const qfast = require("qfast")

qfast.get("https://jsonplaceholder.typicode.com/posts/1", {
    "Content-Type": "application/json"
}).then(res => console.log(res))