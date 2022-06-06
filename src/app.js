/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];
window.onload = function() {
  //write your code here
  var whoDid = Math.floor(Math.random() * 4);
  var whatDid = Math.floor(Math.random() * 4);
  var toWhat = Math.floor(Math.random() * 3);
  var whenDid = Math.floor(Math.random() * 5);
  function rep() {
    document.body.innerHTML = document.body.innerHTML.replace(
      "My dog ate my homework",
      who[whoDid] +
        " " +
        action[whatDid] +
        " " +
        what[toWhat] +
        " " +
        when[whenDid]
    );
  }
  rep();
  console.log("Hello Rigo from the console!");
};
