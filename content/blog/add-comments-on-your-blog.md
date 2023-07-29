---
title: "Add comments on your blog post created with gatsby"
date: 2022-02-12
tags: ["gatsby","tutorial"]
---

If you have any blog website created using `jsx` I mean react gatsby, nextjs or something than you might want to add comments on your blog page right? Here is a full article about that.

## Step 1. Create a github repo.

If you already have github account created than no worries but if you don't have github account created than go to https://github.com and login or sign up into your account then open your profile by clicking on your avatar on top right and click on your profile.

Than go to repositories tab and click on new button. Give your repository an epic name as we are going to use this as our comments database.

> NOTE: Make sure to make it public and don't add any files not even README file, let it be completly empty.

## Step 2. Coding

Its time to code the comment system. well that's pretty easy. come on' lemme show you.

first open your code in any code editor or ide. Than create new file named `comments.js`. and write down this code in that file.

```jsx
import React, { Component } from "react"

export default class Comments extends Component {
  constructor(props) {
    super(props)
    this.commentBox = React.createRef()
  }

  componentDidMount() {
    let scriptEl = document.createElement("script")
    scriptEl.setAttribute("src", "https://utteranc.es/client.js")
    scriptEl.setAttribute("crossorigin", "anonymous")
    scriptEl.setAttribute("async", true)
    scriptEl.setAttribute(
      "repo",
      "your_github_username/name_of_repo_we_created_before"
    )
    scriptEl.setAttribute("issue-term", "title")
    scriptEl.setAttribute("theme", "github-light")
    this.commentBox.current.appendChild(scriptEl)
  }

  render() {
    return (
      <div style={{ width: "100%" }} id="comments">
        <div ref={this.commentBox}></div>
      </div>
    )
  }
}
```

We are using package named `utteranc` and yeah that's it for 90% coding :) that was easy btw.

now open your `blog post template` and import comments.

```js
import comments from "./path/for/comments.js"
```

one last thing now go to end section and just write down this word i mean tag.

```js
<comments />
```

and yeah here you are done! we are using github issues as database and we are done now.

now your comments should look like this,

![image](https://user-images.githubusercontent.com/75468116/153739810-0b1bf1a5-f59b-4c41-899c-8c139ca3d234.png)

If you get any error or any problem feel free to comment below!
