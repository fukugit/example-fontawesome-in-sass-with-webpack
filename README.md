# example-fontawesome-in-sass-with-webpack
This project explains that the way of usage of FontAwesome in Sass with Webpack.  

I've faced some problems when trying it, so that I put together it in the [problem](#problem).  
Some problems were [fixed](#fixed) by myself, unfortunately, one problem was't. You can see the reamin problem at the [Unfixed](#unfixed).  

<br/>

The followoing is that it is available and unavailable for this project to do.  

| Things to do                                | Available or not |
| ------------------------------------------- | ---------------- |
| Usage of FontAwesome class in HTML element. | Available        |
| Defination of FontAwesome font file in CSS. | Available        |
| Defination of FontAwesome class in Sass.    | Unavailable      |

<br/>

In the end, I've tried to find a web sites of explanation a way of usage FontAwesome with Webpack, but it wasn't.  
So, please tell me a good webpage to fix the above issue it if you know.  
<br/>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of contents

- [Getting Started](#getting-started)
- [Demo](#demo)
- [Problem](#problem)
  - [Fixed](#fixed)
  - [Problem 1 (Build error)](#problem-1-build-error)
    - [Solution](#solution)
  - [Problem 2 (Not found font file)](#problem-2-not-found-font-file)
    - [Solution](#solution-1)
  - [Unfixed](#unfixed)
  - [Problem 1 (Not appear FontAesome icon in Sass)](#problem-1-not-appear-fontaesome-icon-in-sass)
- [Project Structure](#project-structure)
- [Dependency](#dependency)
- [Acknowledgement](#acknowledgement)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<br/>


## Getting Started
It is necessary to install ```npm``` before executing the below commands.  
<br/>

```
npm insatall
npm run build
```

<br/>

Then, open the ```./docs/index.html``` with Browser.  
<br/>

## Demo
You can see the webpage in [here](https://fukugit.github.io/example-fontawesome-in-sass-with-webpack/index.html) that uses FontAwesome, which is made by sass with webpack.  
<br/>


## Problem
### There are fixed problem

### Problem 1 (Build error)
I faced the below error message after building.  
```
ERROR in ./src/style.scss (./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss) 4:36-93
Module not found: Error: Can't resolve '../webfonts/fa-brands-400.eot' in ...
```

#### Solution
To resolve the problem, the [resolve-url-loader](https://www.npmjs.com/package/resolve-url-loader?utm_source=pocket_mylist) should be used.  
It has a function of available to use the property of ```url()``` in Sass. 
The probabillity that the FontAwesome uses it itself, so it is necessary to install the plugin.  
<br/>

### Problem 2 (Not found font file)
Only installing the ```@fortawesome/fontawesome-free```, doesn't Sass file refer the font file.  

#### Solution
To refer the font file from Sass, the entry point js file like ```index.js``` defines something like the below.  
The settings put it into the output folder for CSS built Sass.  
```
import '@fortawesome/fontawesome-free/webfonts/fa-regular-400.ttf';
import '@fortawesome/fontawesome-free/webfonts/fa-brands-400.ttf';
import '@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf';
```
<br/>

### There is NOT fixed problem
### Problem 1 (Not appear FontAesome icon in Sass)
I tried to use ```$fa-var-twitter``` provided by FontAwesome but it does not appear at Webpage. It was displayed a shape of an empty square instead.  
I raised that in [stackoverflow](https://stackoverflow.com/questions/69013214/fontawesome-icon-in-sass-with-webpack-is-not-displayed).  
<br/>

## Project Structure
| File                                              | Explanation                                       |
| ------------------------------------------------- | ------------------------------------------------- |
| [webpack.config.js](/webpack.config.js)           | setting file of Webpack                           |
| [index.js](/src/index.js)                         | entry point.                                      |
| [_variables.scss](/src/_variables.scss)           | Defination of ```$fa-font-path``` in this file.   |
| [_for-normal-css.scss](/src/_for-normal-css.scss) | Example of how to set FontAwwesome in normal CSS. |

<br/>

## Dependency 

```
npm install --save-dev css-loader file-loader html-webpack-plugin webpack webpack-cli
npm install --save-dev resolve-url-loader sass sass-loader style-loader mini-css-extract-plugin
npm install @fortawesome/fontawesome-free
```
<br/>

## Acknowledgement
Creating this project ,I was basically following [this document in official site.](https://fontawesome.com/v5.0/how-to-use/on-the-web/using-with/sass).  

<br/>
