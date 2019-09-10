//button
//captcha-display
//captcha-enter
//captcha valiadtion
var a = document.getElementById("log")
var cd = document.getElementById("captcha-display")
var c1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1
var c2 = Math.floor(Math.random() * (10 - 1 + 1)) + 1
var c3 = Math.floor(Math.random() * (10 - 1 + 1)) + 1
var c4 = Math.floor(Math.random() * (10 - 1 + 1)) + 1
var i = document.getElementById("captcha-enter")
a.style.display = "none"
var display = c1 + " " + c2 + " " + c3 + " " + c4
cd.value = display
var write = ''
alert("Enter the captcha correctly to enter the game")
i.addEventListener("input", function () {
      write = i.value
      if (write == display) {
            a.style.display = "block"
      }
      if (write != display) {
            a.style.display = "none"
      }
})


