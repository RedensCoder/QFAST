const qfast = require("qfast")

qfast.get("https://jsonplaceholder.typicode.com/posts/1").then(res => console.log(res))