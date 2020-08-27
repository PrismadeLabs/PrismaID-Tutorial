# PrismaID Tutorial

![Version](https://img.shields.io/npm/v/@prismadelabs/prismaidtutorial.svg)
![Size](https://img.shields.io/bundlephobia/min/@prismadelabs/prismaidtutorial.svg)
![Types](https://img.shields.io/npm/types/@prismadelabs/prismaidtutorial.svg)

## Overview

The PrismaID Tutorial is intended to be used in a web application and it provides visual hints how to use a PrismaID tag.

## Using this component

- Put a script tag `<script src='https://unpkg.com/@prismadelabs/prismaidtutorial@1.0.5/dist/prismaidtutorial.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

## Use Tutorial in HTML

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="UTF-8">
    <title>PrismaID Tutorial</title>
    <meta name="viewport" content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <script src="https://unpkg.com/@prismadelabs/prismaidtutorial@1.0.5/dist/prismaidtutorial.js"></script>
</head>

<body style="margin: 0px">
    <prismaid-tutorial></prismaid-tutorial>
    <!-- you could specify parameters directly or later somewhere in script -->
    <!-- <prismaid-tutorial welcome-title="Hello Tutorial!"></prismaid-tutorial> -->
</body>

</html>
```

## Use Tutorial in Javascript

Once included you could work with the tutorial component the same way as you do with other components.

```javascript
const tutorialElement = document.querySelector('prismaid-tutorial')

tutorialElement.welcomTitle = "Hello Tutorial!"

tutorialElement.addEventListener('tutorialCompleted', () => {
    // do some action
})
```

## Assets

### Texture Packer

<!-- Auto Generated Below -->

## Properties

| Property            | Attribute             | Description                                                                                              | Type      | Default                     |
| ------------------- | --------------------- | -------------------------------------------------------------------------------------------------------- | --------- | --------------------------- |
| `cardSrc`           | `card-src`            | Defines source for the card image                                                                        | `string`  | `"assets/images/card.png"`  |
| `codeType`          | `code-type`           | Defines code type for swipe slide. Uses different animation based on this code type                      | `string`  | `"normal"`                  |
| `finishButtonTitle` | `finish-button-title` | Finish screen "FINISH" button title                                                                      | `string`  | `"CHECK"`                   |
| `finishText`        | `finish-text`         | Finish screen "TEXT" - content                                                                           | `string`  | `"Finish Screen Text"`      |
| `holdText`          | `hold-text`           | Hold screen "TEXT" - content                                                                             | `string`  | `"Hold Screen Text"`        |
| `logoSrc`           | `logo-src`            | Defines source for the logo image. It could be used instead of welcome-title.                            | `string`  | `"assets/images/logo.png"`  |
| `nextButtonTitle`   | `next-button-title`   | Welcome screen "NEXT" button title                                                                       | `string`  | `"NEXT"`                    |
| `phoneSrc`          | `phone-src`           | Defines source for the phone image                                                                       | `string`  | `"assets/images/phone.png"` |
| `placementText`     | `placement-text`      | Placement screen "TEXT" - content                                                                        | `string`  | `"Placement Screen Text"`   |
| `slideToPage`       | `slide-to-page`       | Allows to scroll smoothly (false) or just by page - swipe gesture (true)                                 | `boolean` | `false`                     |
| `swipeText`         | `swipe-text`          | Swipe screen "TEXT" - content                                                                            | `string`  | `"Swipe Screen Text"`       |
| `themeColor`        | `theme-color`         | Color used to colorize buttons and background image, please use hex code format e.g. #043487             | `string`  | `""`                        |
| `useSlides`         | `use-slides`          | Defines a set of slides to be used.Valid values are: welcome,hold,swipe,fingerplacement,finish,nosupport | `string`  | `""`                        |
| `videoUrl`          | `video-url`           | Video path used on the finish screen                                                                     | `string`  | `""`                        |
| `welcomeSubtitle`   | `welcome-subtitle`    | Welcome screen "Sub Title" text                                                                          | `string`  | `"Welcome to"`              |
| `welcomeText`       | `welcome-text`        | Welcome screen "TEXT" - content                                                                          | `string`  | `"Welcome Screen Text"`     |
| `welcomeTitle`      | `welcome-title`       | Welcome screen "Title" text                                                                              | `string`  | `"DEMO"`                    |


## Events

| Event               | Description                                  | Type                |
| ------------------- | -------------------------------------------- | ------------------- |
| `tutorialCompleted` | Invoked after the "FINISH" button is pressed | `CustomEvent<void>` |
