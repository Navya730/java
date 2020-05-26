(function (window) {
var names=[{name:"John"},{ name:"nav"}, {name:"Joe"}];
var speakWord = "Hello";
names.sayhello=function=function () {
  console.log(speakWord + names.name);
}
window.names=names;
})(window);

