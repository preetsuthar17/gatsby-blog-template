---
title: "CSS Flexbox 💪: An Explained Guide"
date: 2023-07-11
tags: ["css", "guide"]
---

## Introduction:

CSS Flexbox is a powerful layout module that enables developers to create flexible and responsive web designs with ease. By providing a simple and intuitive way to arrange elements within a container, Flexbox has become an essential tool for building modern web applications. In this blog post, we will dive deep into the world of Flexbox, exploring its properties and demonstrating how to use them through practical examples.

### How flexbox works?

Before we delve into the specifics of Flexbox, let's quickly review how it works. Flexbox operates on a parent-child relationship, where the parent container, referred to as the flex container, controls the layout of its child elements, known as flex items. By defining properties on the flex container, we can control the arrangement, alignment, and distribution of the flex items within it.

CSS Flexbox, or the Flexible Box Layout, provides a more efficient way to lay out, align, and distribute space among items in a container, even when their size is unknown or dynamic. It's particularly useful for accommodating different display devices and screen sizes. A flex container has the ability to alter its items' width/height and order to best fill the available space. Most importantly, the flexbox layout is direction-agnostic, unlike regular layouts such as block (vertical) and inline (horizontal) [Source](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

## Understanding the Basics

To start using the flexbox layout, you need to set the display property of the container to either 'flex' or 'inline-flex'. This enables a flex context for all its direct children.

```css
.container {
  display: flex; /* or inline-flex */
}
```

This code snippet defines a flex container. The flex container becomes the parent element, and the direct children become flex items [Source](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

## Flex Container Properties

The flex container has several properties that control the layout of its children:

1. **flex-direction**: This property determines the main axis of the container and dictates the direction in which the flex items are placed in the container. The possible values are `row`, `row-reverse`, `column`, `column-reverse`.

   ```css
   .container {
     flex-direction: row; /* default value */
   }
   ```

2. **justify-content**: This property aligns items along the main axis of the current line of the flex container. Possible values include `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`.

   ```css
   .container {
     justify-content: center;
   }
   ```

3. **align-items**: This property defines the default behavior for how flex items are laid out along the cross axis on the current line. Possible values include `flex-start`, `flex-end`, `center`, `baseline`, `stretch`.

   ```css
   .container {
     align-items: stretch; /* default value */
   }
   ```

4. **flex-wrap**: By default, flex items will try to fit onto one line. You can change that with `flex-wrap`. Possible values include `nowrap`, `wrap`, `wrap-reverse`.

   ```css
   .container {
     flex-wrap: wrap;
   }
   ```

5. **align-content**: This property aligns a flex container's lines within it when there is extra space in the cross-axis. This property has no effect when the flex container has only single line. Possible values include `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `stretch`.

   ```css
   .container {
     align-content: space-around;
   }
   ```

## Flex Item Properties

Flex items have several properties to control their size and order:

1. **order**: This property controls the order in which items appear in the flex container. The default value is `0`.

   ```css
   .item {
     order: 2; /* default is 0 */
   }
   ```

2. **flex-grow**: This property defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. The default value is `0`.

   ```css
   .item {
     flex-grow: 1;
   }
   ```

3. **flex-shrink**: This property defines the ability for a flex item to shrink if necessary. Like `flex-grow`, it accepts a unitless value that serves as a proportion. The default value is `1`.

   ```css
   .item {
     flex-shrink: 1; /* default value */
   }
   ```

4. **flex-basis**: This property defines the default size of an element before the remaining space is distributed. It can be a length (e.g., `20%`, `5rem`, etc.) or a keyword. The `auto` keyword means "look at my width or height property".

   ```css
   .item {
     flex-basis: auto; /* default value */
   }
   ```

Flexbox is an incredibly powerful layout tool, but it's important to note that it's not without its bugs. For a comprehensive list of known flexbox issues and their workarounds, consider checking out the [Flexbugs](https://github.com/philipwalton/flexbugs) project on GitHub [Source](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

### Conclusion:

CSS Flexbox is a powerful tool that simplifies the process of creating flexible and responsive web layouts. By leveraging the properties discussed in this blog post, you can achieve a wide range of layout designs. Flexbox's intuitive syntax and powerful capabilities make it a go-to choice for modern web development. Experiment with different Flexbox properties and explore its endless possibilities to create visually appealing and responsive web designs.
