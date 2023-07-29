---
title: "Implementing a Dark Mode Toggle with CSS and JavaScript."
date: 2023-07-07
tags: ["css","javascript", "tutorial"]
---

#### Introduction

Dim mode has gotten to be progressively well known in web plan, giving clients with an elective color plot that's simpler on the eyes and decreases eye strain, particularly in low-light situations. In this web journal post, we'll investigate how to actualize a dim mode toggle on website utilizing CSS and JavaScript. By the conclusion of this instructional exercise, you'll have a working dim mode highlight that clients can switch on or off.

#### HTML Structure

Let's accept we have a basic HTML structure with a header, primary content, and a footer. We'll include a flip
button within the header to switch between light and dull mode. Here's an case:

(`index.html`)

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="styles.css" />
  </head>
  <body>
    <header>
      <h1>Website Title</h1>
      <button id="darkModeToggle">Toggle Dark Mode</button>
    </header>

    <main>
      <!-- Main content goes here -->
    </main>

    <footer>
      <!-- Footer content goes here -->
    </footer>

    <script src="script.js"></script>
  </body>
</html>
```

#### CSS Styling

Next, let's define the CSS styles for both light and dark modes in a separate CSS file (`styles.css`):

```css
/* Light mode styles */
body {
  background-color: #ffffff;
  color: #000000;
}

/* Dark mode styles */
body.dark-mode {
  background-color: #1f1f1f;
  color: #ffffff;
}
```

#### JavaScript Functionality

To implement the dark mode toggle functionality, we'll use JavaScript. Create a JavaScript file (`script.js`) and link it to the HTML file.

```javascript
// Get the dark mode toggle button element
const darkModeToggle = document.getElementById("darkModeToggle")

// Listen for a click event on the toggle button
darkModeToggle.addEventListener("click", function () {
  // Toggle the dark mode class on the body element
  document.body.classList.toggle("dark-mode")

  // Store the user's preference in localStorage
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled")
  } else {
    localStorage.setItem("darkMode", "disabled")
  }
})

// Check if dark mode preference is saved in localStorage
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode")
} else {
  document.body.classList.remove("dark-mode")
}
```

> Check out example [here](https://codepen.io/preetsuthar17/pen/rNQGjRY)

#### Explaination

Within the JavaScript code, we to begin with get the dull mode flip button component utilizing its ID. We at that point tune in for a tap occasion on the button and flip the 'dark-mode' lesson on the body component in like manner.

When the client clicks the flip button, the 'dark-mode' course is included or evacuated from the body component, which triggers the CSS styles characterized for dull mode.

Moreover, we utilize the localStorage question to store the user's inclination for dim mode. On the off chance that the 'dark-mode' lesson is show, we store 'enabled' in localStorage; something else, we store 'disabled'. This way, the user's inclination is recalled indeed in case they revive the page.

#### Conclusion

Executing a dull mode flip on your site can upgrade the client encounter and give a outwardly engaging elective. By taking after the steps outlined in this instructional exercise, you'll effortlessly include a dull mode highlight utilizing CSS and JavaScript. Feel free to customize the styles to coordinate your website's plan and give a consistent involvement for your clients.
