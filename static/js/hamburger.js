jQuery(document).ready(function($){

  var icon = document.getElementById("icon");
  var icon1 = document.getElementById("a");
  var icon2 = document.getElementById("b");
  var icon3 = document.getElementById("c");
  var nav = document.getElementById('navres');
  var blue = document.getElementById("blue");
  var li = document.getElementById("pullout-menu");

  icon.addEventListener('click', function() {
    icon1.classList.toggle('a');
    icon2.classList.toggle('c');
    icon3.classList.toggle('b');
    nav.classList.toggle('show');
    blue.classList.toggle('slide');
  });

  li.addEventListener('click', function() {
    icon1.classList.toggle('a');
    icon2.classList.toggle('c');
    icon3.classList.toggle('b');
    nav.classList.toggle('show');
    blue.classList.toggle('slide');
  })
});
