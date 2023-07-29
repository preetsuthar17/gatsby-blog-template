---
title: "Quick & easy guide to get started with Gatsby"
date: 2022-02-14
tags: ["webdev","tutorial"]
---

## Introduction

Gatsby is an open-source framework that includes the functionality of React, GraphQL, and we back into a single framework that is used to build static websites and apps. It's designed to give a fast performance to the website and a friendly experience to the developer. It has tons of out-of-box features like code splitting. Gatsby is becoming a staple of modern web development.

## Get started

Gatsby makes it very easy to get up and running with a “hello world” boilerplate project by running simple CLI commands. Assuming you have Node installed locally, install Gatsby globally

```bash
npm install -g gatsby-cli
```

Now you can create a local directory and remote repository where you’d like your project to live

```bash
gatsby new [SITE_FOLDER_NAME] [URL_OF_STARTED_GITHUB_REPO]
```

This will generate all required files for a gatsby project. now navigate to `src/pages/index.js` and there you'll see the simplest react component serving your site's homepage.

```jsx
export default () => <div>Hello world!</div>
```

Now open your terminal and run following command

```bash
gatsby develop
```

and then once all processing is done you'll see this in your terminal.

![image](https://user-images.githubusercontent.com/75468116/153793841-96d7c385-68cc-442a-803c-b44199185270.png)

your localhost port(8000) might be different than this one.

now go to that localhost port website on your browser and wow you'll see hello world on your page.

Whoohoo we are done. that was for starting up gatsby.
