
window.addEventListener("scroll", function() {
    var elements = document.querySelectorAll(".etapesec");
  
    elements.forEach(function(element) {
      var position = element.getBoundingClientRect();
  
      
      if ((position.top < window.innerHeight/1.5)) {
        element.classList.add("fade-in");
      }
    });
  });