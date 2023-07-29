---
title: "HTML Cheatsheet for Beginners."
date: 2021-09-01
tags: ["html","beginners"]
---

## Structure

This is the starter code of HTML.

### Boilerplate

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

## Headings

There are six headings available in HTML, H1 is the largest among all, and H6 is the smallest.

### h1 Tag

```html
<h2>Heading 1</h2>
```

### h2 Tag

```html
<h2>Heading 2</h2>
```

### h3 Tag

```html
<h3>Heading 3</h3>
```

### h4 Tag

```html
<h4>Heading 4</h4>
```

### h5 Tag

```html
<h5>Heading 5</h5>
```

### h6 Tag

```html
<h6>Heading 6</h6>
```

## Container

Container tags are the tags that contain some data such as text, image, etc. There are several container tags in HTML.

### div tag

div tag or division tag is used to make blocks or divisions in the document.

```html
<div>This is div block</div>
```

### span tag

span is a container for inline content

```html
<span> This is span block </span>
```

### p tag

Paragraph

```html
<p>This is a paragraph</p>
```

### pre tag

pre tag represents pre-formatted text

```html
<pre> Hello World </pre>
```

### code tag

code tag is used to represent source codes

```markup
<code>
import python
</code>
```

## Text Formatting

Text formatting tags are used to format text or data of HTML documents. You can do certain things like creating italic, bold, strong text to make your document look more attractive and understandable.

### b tag

```html
<b>I'm bold text</b>
```

### strong tag

```html
<strong>I'm important text</strong>
```

### i tag

```html
<i>I'm italic text</i>
```

### em tag

```html
<em>Emphasized text</em>
```

### sub tag

```html
<sub>Subscript</sub>
```

### sup tag

```html
<sup>Superscript</sup>
```

## Lists

Lists can be either numerical, alphabetic, bullet, or other symbols. You can specify list type and list items in HTML for the clean document.

### ol tag

Ordered list starts with `<ol>` tag and each list item starts with `<li>` tag

```html
<ol>
  <li>Data 1</li>
  <li>Data 2</li>
  <li>Data 3</li>
</ol>
```

### ul tag

```html
<ul>
  <li>Your Data</li>
  <li>Your Data</li>
</ul>
```

## Media

Media is anything that is present in digital form such as image, video, audio, etc.

### audio tag

It is used to embed sound content in the document.

```html
<audio controls>
  <source src="demo.mp3" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>
```

### img tag

It is used to embed or import image in a webpage.

```html
<img src="Source_of_image" alt="Alternate text" />
```

### video tag

It is used to embed video in the webpage.

```html
<video width="480" height="320" controls>
  <source src="demo_move.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

## Table

A table is a collection of rows and columns. It is used to represent data in tabular form.

### Table Structure

```html
<table>
  <caption>
    Demo Table
  </caption>
  <thead>
    <tr>
      <th>Column1</th>
      <th colspan="2">Column2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data1</td>
      <td>Data2</td>
      <td>Data2</td>
    </tr>
    <tr>
      <td>Data1</td>
      <td>Data2</td>
      <td>Data2</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>&nbsp;</td>
      <td>Data</td>
      <td>Data</td>
    </tr>
  </tfoot>
</table>
```

## Links

Links are clickable text that can redirect you to some other page.

### a tag

a or anchor tag defines a hyperlink.

```html
<a href="https://preetsuthar.me/">Visit preetsuthar portfolio!</a>
```

## Form

### Sample Form

Form is used to collect user's input, generally user's data is sent to server for further processing.

```html
<form action="/action.php" method="post">
  Name: <input name="name" type="text" /> <br />
  Age: <input max="90" min="1" name="age" step="1" type="number" value="18" />
  <br />
  <select name="gender">
    <option selected="selected" value="male">Male</option>
    <option value="female">Female</option></select
  ><br />
  <input checked="checked" name="newsletter" type="radio" value="daily" /> Daily
  <input name="newsletter" type="radio" value="weekly" /> Weekly<br />
  <textarea cols="20" name="comments" rows="5">Comment</textarea><br />
  <label
    ><input name="terms" type="checkbox" value="tandc" />Accept terms</label
  >
  <br />
  <input type="submit" value="Submit" />
</form>
```

## Characters & Symbols

Some symbols are not directly present on the keyboard, but there are some ways to use them in HTML documents. We can display them either by entity name, decimal, or hexadecimal value.

### Copyright Symbol (©)

```html
&copy;
```

### Less than (<)

```html
&lt
```

### Greater than (>)

```html
&gt;
```

### Ampersand (&)

```html
&amp;
```

### Dollar (\$)

```html
&dollar;
```

## Random Text

### Elon Musk

```html
Elon Reeve Musk FRS is an entrepreneur and business magnate. He is the founder,
CEO, and Chief Engineer at SpaceX; early stage investor, CEO, and Product
Architect of Tesla, Inc.; founder of The Boring Company; and co-founder of
Neuralink and OpenAI. A centibillionaire, Musk is one of the richest people in
the world.
```

## Semantic Elements

Semantic elements are those elements that are self describable, i.e., from their name itself, you can understand their meaning.

### section tag

It defines a section in the document

```html
<section>This is a section</section>
```

### article tag

It represents self-contained content

```html
<article>Enter your data here</article>
```

### aside tag

It is used to place content in the sidebar

```html
<aside>Your data</aside>
```

HTML Cheatsheet was inspired by [CodeWithHarry](https://www.codewithharry.com/blogpost/html-cheatsheet)
