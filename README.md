# example-fontawesome-npm
🎉 🎉 🎉 このプロジェクトはSass+webpack+npmでFontAwesomeを利用する方法を説明しています。  🎉 🎉 🎉  
このサンプルプロジェクトを作成した背景としては、webpack+SassでFontAwesomeを使用する方法の文献が少なかったことと、最初にプロジェクトを作成してもうまく動かなかったことから自分用のメモとしてこのサンプルプロジェクトを作成することとしました。  
webpack+SassでFontAwesomeを使用する上での注意点にはついては[Important Point](#Important Point)を参考にして下さい。👀  
設定方法については[Project Structure](#Project Structure)で各ファイルの設定方法を細かく記述しています。こちらも参照して下さい。👀  

このプロジェクトは、基本的にはFontawesomeの[公式ページのSassでFontawesomeを利用する方法](https://fontawesome.com/v5.0/how-to-use/on-the-web/using-with/sass)に従って作成しました。  

🎉 🎉 🎉 This project gives you the way of usage of FontAwesome in Sass with webpack. 🎉 🎉 🎉  

At first time, I'd like to share the reason I created this project.  
For first reason, Few sites of explanation the way of usage FontAwesome with webpack exist in the web sites as long as I checked. For second one, I faced some problem that I put together in the [section of Important Point](#Important Point) during coding with webpack.  

I created this project following [the how to set up FontAwesome in Sass in official site.](https://fontawesome.com/v5.0/how-to-use/on-the-web/using-with/sass)


### Prerequisites
It is necessary to install '''npm''' before project up and running this project on your local machine.  
npmはあらかじめインストールして下さい。

What things you need to install the software and how to install them

```
Give examples
```

## Getting Started
```
npm insatall
npm run build
```

After executing the abvobe commands, open the '''./docs/index.html''' with Chrome or other browser.  
上記のコマンドを実行後に、./docs/index.htmlをChromeで開いて下さい。

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.


### Demo
[See demo](http://www.dropwizard.io/1.0.2/docs/)

## Important Point
|     |     |
| --- | --- |
|     |     |

## Project Structure
|     |     |
| --- | --- |
|     |     |

## Dependency 
Add library name.  
* [Mocha](https://www.npmjs.com/package/mocha) - The testing library in npm.  

```
npm init
npm install webpack webpack-cli
npm install html-webpack-plugin --dev
npm install sass-loader resolve-url-loader css-loader file-loader -dev
npm install sass
npm install --save-dev style-loader
npm install @fortawesome/fontawesome-free
```

重要！！！
https://www.npmjs.com/package/resolve-url-loader?utm_source=pocket_mylist
下記のエラーを回避するために上記のライブラリが必要
```
ERROR in ./src/style.scss (./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss) 4:36-93
Module not found: Error: Can't resolve '../webfonts/fa-brands-400.eot' in '/Users/fukuma/git/example-fontawesome-npm/src'
 @ ./src/style.scss 8:6-140 22:17-24 26:0-110 26:0-110 27:22-29 27:33-47 27:50-64
 @ ./src/index.js 1:0-22
 ```

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
