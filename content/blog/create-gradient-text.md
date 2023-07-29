---
title: "Here is How you create Gradient Underline Text."
date: 2021-09-01
tags: ["css"]
---

## Step 1 - Add HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Gradient Underline</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <section class="section">
      <h2>Gradient Underline</h2>
    </section>
  </body>
</html>
```

## Step 2 - Add CSS

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

.section {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

h2 {
  font-size: 5rem;
  font-weight: 900;
  color: rgb(0, 162, 255);
  margin-bottom: 1.5rem;
  text-align: center;
  text-decoration: none;
  background-image: linear-gradient(90deg, rgb(255, 0, 106), rgb(0, 110, 255));
  background-repeat: no-repeat;
  background-position: bottom left;
  background-size: 0% 3px;
  transition: background-size 500ms ease-in-out;
}

h2:hover {
  background-size: 100% 3px;
}
```

And Then Your are done your gradient under line on hover is ready.
