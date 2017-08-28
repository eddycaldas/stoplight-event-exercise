(function() {
  'use strict';

var stopButton = document.getElementById("stopButton")
var slowButton = document.getElementById("slowButton")
var goButton = document.getElementById("goButton")
var stopLight = document.getElementById("stopLight")
var slowLight = document.getElementById("slowLight")
var goLight = document.getElementById("goLight")

stopButton.addEventListener("click", function() {
  stopLight.style.backgroundColor = "red"
  console.log("bulb on");
  // stopLight.classList.remove("selected-red")
  // stopLight.classList.add("selected-red")
  stopButton.addEventListener("click", function() {
    stopLight.style.backgroundColor = "black"
    console.log("bulb off");
  })
  stopButton.addEventListener("mouseenter", mouseEnter)
  stopButton.addEventListener("mouseleave", mouseLeave)
  function mouseEnter (){
    console.log("Entered button");
  }
  function mouseLeave () {
    console.log("Left button");
  }


})

  slowButton.addEventListener("click", function() {
    slowLight.style.backgroundColor = "orange"
    console.log("bulb on");
    // slowLight.classList.remove("selected-orange")
    // slowLight.classList.add("selected-orange")
    slowButton.addEventListener("click", function() {
      slowLight.style.backgroundColor = "black"
      console.log("bulb off");

    })
    slowButton.addEventListener("mouseenter", mouseEnter)
    slowButton.addEventListener("mouseleave", mouseLeave)
    function mouseEnter (){
      console.log("Entered button");
    }
    function mouseLeave () {
      console.log("Left button");
    }

    })
    
    goButton.addEventListener("click", function() {
      goLight.style.backgroundColor = "green"
      console.log("bulb on");
      goButton.addEventListener("click", function() {
        goLight.style.backgroundColor = "black"
        console.log("bulb off");

      })
      goButton.addEventListener("mouseenter", mouseEnter)
      goButton.addEventListener("mouseleave", mouseLeave)
      function mouseEnter (){
        console.log("Entered button");
      }
      function mouseLeave () {
        console.log("Left button");
      }

      })

// stopButton.addEventListener("mouseenter", mouseEnter)
// slowButton.addEventListener("mouseenter", mouseEnter)
// goButton.addEventListener("mouseenter", mouseEnter)

// stopButton.addEventListener("mouseleave", mouseLeave)
// slowButton.addEventListener("mouseleave", mouseLeave)
// goButton.addEventListener("mouseleave", mouseLeave)

// function mouseEnter (){
//   console.log("Entered button");
// }
// function mouseLeave () {
//   console.log("Left button");
// }







  // YOUR CODE HERE
})();



