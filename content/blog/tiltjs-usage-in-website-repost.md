---
title: "Adding a tilt effect to a website using Tilt.js [Repost]"
date: 2023-07-04
tags: ["javascript","css","webdev"]
---

In web design, adding subtle interactive effects can greatly improve the user experience. One popular effect that has gained attention recently is the tilt effect, which creates a dynamic and immersive visual experience in response to mouse movements. In this blog post, we'll explore how you can easily apply a tilt effect to your website using the Tilt.js library.

### Getting Started

To begin, First make sure you have the Tilt.js library installed. You can include it in your project by adding the following script tag to your HTML file's `<head>` section:

```html
<script src="https://cdn.jsdelivr.net/npm/vanilla-tilt@1.7.0/dist/vanilla-tilt.min.js"></script>
```

### The Code

Now that we have the library included, let's dive into the code. Here's the code snippet you can use to implement the tilt effect on an element:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Your head content goes here -->
  </head>
  <body>
    <div class="flex-container">
      <a
        data-tilt
        data-tilt-glare="true"
        data-tilt-transition="true"
        data-tilt-scale="1.1"
        class="c-logo"
        href=""
        title="Tilt.js demo"
      >
        Hello 👋🏻
      </a>
    </div>

    <script>
      document.addEventListener("DOMContentLoaded", function () {
        const tiltElement = document.querySelector(".c-logo")
        VanillaTilt.init(tiltElement, {
          max: 25,
          speed: 10,
          glare: true,
          "max-glare": 0.4,
        })
      })
    </script>
  </body>
</html>
```

### Explanation of the code

Let's go through the code step by step to understand how the tilt effect is implemented:

1. First, we have an HTML structure that contains a `<div>` with a nested `<a>` element. The `<a>` element represents the element that will have the tilt effect applied to it. You can modify this structure according to your needs.

2. The `<a>` element has various `data-tilt` attributes that control the behavior of the tilt effect. For example, `data-tilt-glare="true"` adds a subtle glare effect, `data-tilt-transition="true"` enables smooth transitions, and `data-tilt-scale="1.1"` sets the maximum scale for the tilt effect.

3. Inside the `<script>` tag, we add an event listener for the "DOMContentLoaded" event. This ensures that the JavaScript code is executed after the HTML content has been loaded.

4. Within the event listener, we select the tilt element using `document.querySelector('.c-logo')`. You can modify the selector to target your desired element.

5. Finally, we initialize the tilt effect using `VanillaTilt.init(tiltElement, options)`. The `tiltElement` variable represents the element we selected earlier, and `options` is an object that allows you to customize the tilt effect's parameters. In this example, we set the maximum tilt angle to 25 degrees, the tilt speed to 10, enable glare with a maximum opacity of 0.4, and more.

### Style code

You can style an element with a gradient effect using CSS. Here is an example of CSS code used in HTML:

```css
@import url("https://fonts.googleapis.com/css?family=Fira+Sans:300,400,500,600,700");
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

* {
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
  background: #e7e7e7;
  margin-top: 5%;
}

.flex-container,
.c-logo {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: stretch;
  align-items: center;
}

.c-logo {
  width: 500px;
  height: 500px;
  background-color: #7e56ff;
  background-image: linear-gradient(
    150deg,
    #5a00ff 0%,
    #ff1ff7 100%,
    #ff1ff7 100%
  );
  box-shadow: 0 20px 27px rgba(0, 0, 0, 0.05);
  color: white;
  text-decoration: none;
  border-radius: 10px;
  font-size: 4em;
  font-weight: 300;
  transform-style: preserve-3d;
  transform: perspective(500px);
  box-shadow: 0 20px 70px -10px rgba(0, 0, 0, 0.7), 0 50px 100px 0 rgba(0, 0, 0, 0.2);
}

.c-logo > span {
  display: block;
  transform: translateZ(50px) scale(0.6);
  text-shadow: -2px -1px 2px rgba(150, 150, 150, 1);
  font-weight: 600 !important;
}

.c-logo:hover:after {
  transform: translateZ(-100px);
}
```

> Demo of this library [here](https://tiltjs-demo.vercel.app/)
### Conclusion

The Tilt.js library allows you to easily add a tilt effect to website elements, providing users with an immersive and interactive experience. The library offers a variety of configuration options that allow you to tailor the effect to your design preferences. Experiment with different settings and styles to create visually stunning gradient effects that enhance the overall aesthetic of your website.
