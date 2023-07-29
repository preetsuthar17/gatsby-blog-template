---
title: "Create a basic web server using express js"
date: 2021-09-25
tags: ["javascript","tutorial"]
---

Easiest way to create a basic webserver using express js.

We can use node js to create a web server using node js will a long time to create a server so we use express js for these types of thing.

First of all we are gonna create a new file named `server.js` or you can use any name you want.

### Coding Time

```js
const express = require("express") // npm install express
const app = express()
const port = 3000

// Send text
app.get("/", (req, res) => {
  res.send("Hello World!")
})

// Send HTML File
app.get("/", (req, res) => {
  res.sendFile("./index.html")
})

app.listen(port, () => {
  console.log(`Your app is listening to port ${port}`)
})
```

Now run your code but how? lemme tell you open terminal in visual studio code or or open command promt in your folder then write down these commands in terminal.

### First command

```bash
npm install express
```

### Second command

```bash
npm install --save-dev nodemon
# To run our code we use this package.
```

### Last command

```bash
nodemon server.js
# make sure to replace server.js with your file name
```

And thats for this post see you in another one
