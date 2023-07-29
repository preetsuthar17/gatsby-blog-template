---
title: "Create Snackbar / Toast in using HTML, CSS & JS."
date: 2021-08-28
tags: ["javascript", "css", "webdev"]
---

Snackbars are often used as tooltips/popups to show a message at the bottom of the screen.

Click on the button to show the snackbar. It will disappear after 3 seconds.

## Create a Snackbar

## Step 1 - Add HTML:

### Example

```html
<!-- Use a button to open the snackbar -->
<button onclick="myFunction()">Show Snackbar</button>

<!-- The actual snackbar -->
<div id="snackbar">Some text some message..</div>
```

## Step 2 - Add CSS:

Style the snackbar and add animations:

### Example

```css
/* The snackbar - position it at the bottom and in the middle of the screen */
#snackbar {
  visibility: hidden; /* Hidden by default. Visible on click */
  min-width: 250px; /* Set a default minimum width */
  margin-left: -125px; /* Divide value of min-width by 2 */
  background-color: #333; /* Black background color */
  color: #fff; /* White text color */
  text-align: center; /* Centered text */
  border-radius: 2px; /* Rounded borders */
  padding: 16px; /* Padding */
  position: fixed; /* Sit on top of the screen */
  z-index: 1; /* Add a z-index if needed */
  left: 50%; /* Center the snackbar */
  bottom: 30px; /* 30px from the bottom */
}

/* Show the snackbar when clicking on a button (class added with JavaScript) */
#snackbar.show {
  visibility: visible; /* Show the snackbar */
  /* Add animation: Take 0.5 seconds to fade in and out the snackbar.
  However, delay the fade out process for 2.5 seconds */
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

/* Animations to fade the snackbar in and out */
@-webkit-keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@-webkit-keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}

@keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}
```

## Step 3 - Add JavaScript:

Use JavaScript to add the "show" class to the snackbar container with a click of a button:

### Example

```js
function myFunction() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar")

  // Add the "show" class to DIV
  x.className = "show"

  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    x.className = x.className.replace("show", "")
  }, 3000)
}
```
