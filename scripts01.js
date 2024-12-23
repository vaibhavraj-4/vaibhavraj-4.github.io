document.addEventListener("DOMContentLoaded", function () {
  var options = {
    strings: [
      "Hello! I'm Vaibhav Raj.",
      "Welcome to my Portfolio!",
      "Scroll down to read About me",
    ],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true,
  };

  var typed = new Typed("#typed-output", options);
});
