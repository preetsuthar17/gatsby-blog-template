---
title: "Theme Toggler using Javascript, HTML, CSS"
date: 2021-09-06
tags: ["javascript","css","webdev"]
---

So what is theme toggler? it's just a setting for your website to set light theme or dark theme and in these days we can do it very easily with few lines of javascript code and yeah let's start exciting thing **Coding**...

### Step 1 : Adding HTML

```html
<!-- Time to write some html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Light & Dark Theme Toggler</title>
    <link rel="stylesheet" href="./styles/style.css" />
  </head>
  <body>
    <div id="container" class="container theme">
      <h2>Hello World!</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque veniam
        delectus corporis. Quasi nemo natus doloribus sed ipsam eius cupiditate
        pariatur eaque nesciunt veniam error, sint adipisci iste voluptatibus
        quos cum alias qui! Hic adipisci sunt ab reprehenderit, eaque deleniti
        dolorum nobis dicta officia eius animi pariatur dignissimos suscipit
        architecto iusto molestias odio autem. Aliquam quasi reprehenderit
        officia voluptate mollitia. At ipsum quae placeat.
      </p>
      <button onclick="themeToggle()">Switch Theme</button>
      <!--Theme toggle function which we are gonna create soon-->
    </div>
    <script src="./js/app.js"></script>

    <!--Link javascript file into main index.html file-->
  </body>
</html>
```

Next let's head over to some css to style the page

### Step 2 : Adding CSS

```css
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "poppins", sans-serif;
}

.theme {
  transition: all 300ms linear;
  background-color: rgb(22, 22, 22);
  color: rgb(214, 214, 214);
}

.container {
  font-size: 1.3rem;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
}

.container h1 {
  font-size: 3rem;
}

.container p {
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 10px;
}

.container button {
  font-size: 1.4rem;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 20px;
  padding-left: 20px;
  border: none;
  background-color: #757ff8;
  color: white;
  border-radius: 3rem;
  cursor: pointer;
}
```

I think you don't need any brief tutorial for CSS stuff as I am just aligning everything in center. Check out [This video](https://www.youtube.com/watch?v=7VE1G8EcmrQ) for brief tutorial to align thing in center.

Finally It's time to add logic i mean javascript into code..

```js
const container = document.getElementById("container")
// Define main container or div with id to get reference to that code

function themeToggle() {
  container.classList.toggle("theme")
}
// Create a function which we used in that button before "themeToggle()" function where we just use that container  variable and toggle a class which we defined in css file head over to css code and check for "theme" class which just change to color of background and text color
```

and yeah with that we are done that was really easy however we can use advance javascript to create these kind of things but i tried the easiest way to tell you.

- [Video tutorial?](https://www.youtube.com/watch?v=hTsqeA-7pEo&t)
