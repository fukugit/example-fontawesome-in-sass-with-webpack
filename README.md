# example-fontawesome-npm
This project gives you the way of usage of FontAwesome in Sass with webpack.  

I've faced some problems when using FontAwesome in Sass with webpack, so that I put together it in [problem](#problem).  
Some problems was fixed, unfortunately, some still wasn't. You can see both [Fixed](#fixed) and [Unfixed](#unfixed).  

Basically, I created this probject following [the how to set up FontAwesome in Sass in official site.](https://fontawesome.com/v5.0/how-to-use/on-the-web/using-with/sass).  

In the end, I'd like to share you why I created this project; Few web sites of explanation a way of usage FontAwesome with webpack exist in the Internet as long as I checked.  
So, please tell me a good webpage to explain usage of it if you know.  


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of contents
- [Important](#important)
- [Fixed](#fixed)
- [Unfixed](#unfixed)
- [Problem](#problem)
- [Usage](#usage)
<!-- END doctoc generated TOC please keep comment here to allow auto update -->



### Prerequisites
It is necessary to install ```npm``` before project up and running it on your local machine.  


## Getting Started
After checking out this project, you should execute these commands.  
```
npm insatall
npm run build
```

Then, open the ```./docs/index.html``` with Chrome or other browser.  


### Demo
[See demo](https://fukugit.github.io/example-fontawesome-npm/index.html)


## Problem
### Fixed
testaaaa

### Unfixed
tewtssss

## Important
### Problem 1 (Build error)
webpackでビルドした時に下記のエラーが発生します。
```
ERROR in ./src/style.scss (./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss) 4:36-93
Module not found: Error: Can't resolve '../webfonts/fa-brands-400.eot' in ...
```

#### Solution
[resolve-url-loader](https://www.npmjs.com/package/resolve-url-loader?utm_source=pocket_mylist)を利用する必要があります。
こちらのプラグインはSass内で```url()```を利用することができるプラグインです。  
おそらくFontAwesome内で```url()```を利用しているためwebpackでFontAwesomeを利用する場合には必須のプラグインなのだと思います。

### Problem 2 (Not found font file)
```@fortawesome/fontawesome-free```をインストールしただけではSass内からfontファイルを参照することができません。

#### Solution
fontファイルは明示的にoutputフォルダに出力するために ```index.js```で以下のように定義する必要があります。
```
import '@fortawesome/fontawesome-free/webfonts/fa-regular-400.ttf';
import '@fortawesome/fontawesome-free/webfonts/fa-brands-400.ttf';
import '@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf';
```

## Project Structure
| File                                    | Explanation                                               |
| --------------------------------------- | --------------------------------------------------------- |
| [webpack.config.js](/webpack.config.js) | webpackの設定ファイル                                            |
| [index.js](/src/index.js)               | エントリーポイントJS. ここでFontAwesomeのフォントファイルを```/docs```に出力しています。 |
| [_variables.scss](/src/_variables.scss) | ```$fa-font-path``` を定義しています。                             |
| [_for-normal-css.scss](/src/_for-normal-css.scss) | SASS形式ではなく通常のCSSでFontAwesomeのフォントを設定する方法です。                             |


## Dependency 

```
npm install --save-dev css-loader file-loader html-webpack-plugin resolve-url-loader sass sass-loader webpack webpack-cli style-loader
npm install --save-dev mini-css-extract-plugin
npm install @fortawesome/fontawesome-free
```

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc


## Usage 
Consectetur Commodo Cursus Sollicitudin Vehicula







/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
@font-face {
  font-family: "Font Awesome 5 Free";
  font-style: normal;
  font-weight: 400;
  font-display: block;
  src: url("../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.eot");
  src: url("../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.eot?#iefix") format("embedded-opentype"), url("./webfonts/fa-regular-400.woff2") format("woff2"), url("../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff") format("woff"), url("../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.ttf") format("truetype"), url("../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.svg#fontawesome") format("svg");
}
