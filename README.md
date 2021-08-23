# example-fontawesome-npm
🎉 🎉 🎉 このプロジェクトはSass+webpack+npmでFontAwesomeを利用する方法を説明しています。  🎉 🎉 🎉  
このサンプルプロジェクトを作成した背景としては、webpack+SassでFontAwesomeを使用する方法の文献が少なかったことと、最初にプロジェクトを作成してもうまく動かなかったことから自分用のメモとしてこのサンプルプロジェクトを作成することとしました。  
webpack+SassでFontAwesomeを使用する上での注意点にはついては[Important Point](#Important Point)を参考にして下さい。👀  
設定方法については[Project Structure](#Project Structure)で各ファイルの設定方法を細かく記述しています。こちらも参照して下さい。👀  

このプロジェクトは、基本的にはFontawesomeの[公式ページのSassでFontawesomeを利用する方法](https://fontawesome.com/v5.0/how-to-use/on-the-web/using-with/sass)に従って作成しました。  

🎉 🎉 🎉  This project gives you the way of usage of FontAwesome in Sass with webpack.  🎉 🎉 🎉  

First of all, I'd like to share some reasones I created this project; Few web sites of explanation a way of usage FontAwesome with webpack exist in the Internet as long as I checked; I faced some problem that I put together in the [section of Important Point](#Important Point) during coding with Webpack.  
So, I created this project as it explain resolving them, following [the how to set up FontAwesome in Sass in official site.](https://fontawesome.com/v5.0/how-to-use/on-the-web/using-with/sass)


### Prerequisites
It is necessary to install '''npm''' before project up and running it on your local machine.  


## Getting Started
After checking out this project, you should execute these commands.  
```
npm insatall
npm run build
```

Then, open the '''./docs/index.html''' with Chrome or other browser.  


### Demo
[See demo](http://www.dropwizard.io/1.0.2/docs/)

## Important Point
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
npm install @fortawesome/fontawesome-free
```

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
