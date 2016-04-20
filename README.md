# KLM

Here you will find my solution for KLM test assignment.

I decided to use AngularJS framework to create carousel. I thought that ability to use a build-in Angular directive "ng-repeat" and track it's items by "$index" will make the process easier, faster and less error prone. Also AngularJS provides $q service which allows to work with promises. With it's help I can receive data asynchronously and use function's return value as soon it is available. All these features allow me to write less code and keep it simple and maintainable. Also Angular provides us with ngAnimate module, which can be used for animating the carousel. I couldn't implement it due to time restrictions though.

In this project I wrote all my JS code in one file although when I work with bigger projects I prefer modular structure and AngularJS supports in perfectly. You find an example of my modular structured code here - https://github.com/valery-sizikova/plushkin

Unfortunately I didn't have time to write pure CSS solution although I think that it's also a good option since for a simple carousel CSS option can work faster than for example a carousel written with JQuery. Also I think that using CSS only is quite logical here because carousel is the way we represent the data without manipulating it.

### Build instructions
- Clone this git repository on your laptop 
```
git clone https://github.com/valery-sizikova/KLM.git
```
- Navigate to this directory
- Install dependencies
```
bower install
npm install
```
- Compile sass file
```
sass src/styles.scss src/styles.css
```
- Start the server
```
npm start
```
- In the opened window navigate to src/ directory - here is built and running project
