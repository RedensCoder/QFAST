const qfast = require("qfast")

qfast.get("https://jsonplaceholder.typicode.com/posts/1", {
    Authorization: "bearer token"
}).then(res => console.log(res))