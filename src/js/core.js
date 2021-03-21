 // @codekit-prepend "../../node_modules/pushbar.js/src/pushbar.js"

 // dark mode js 
 var darkfile = false;
 if (localStorage.getItem('theme') !== null && localStorage.getItem('theme') === 'dark') {
     document.body.classList.add('dark-mode');
     addDarkCss();


 } else {
     document.body.classList.add('light-mode');
 }



 function openSearch() {
     var search = document.getElementById("search-box");
     search.classList.add('open');
     document.getElementById("search").focus();
 }

 function closeSearch() {
     var search = document.getElementById("search-box");
     var form = document.getElementById("search-form");
     search.classList.remove('open');
     form.reset();



 }

 function mode() {
     var element = document.body;
     element.classList.toggle("dark-mode");
     if (localStorage.getItem('theme') !== null && localStorage.getItem('theme') === 'light') {
         localStorage.setItem('theme', 'dark');
         addDarkCss();
         document.body.classList.add('dark-mode');


         document.body.classList.remove('light-mode');
     } else {
         localStorage.setItem('theme', 'light');
         document.body.classList.remove('dark-mode');
         document.body.classList.add('light-mode');
     }


 }

 function addDarkCss() {

     if (darkfile != true) {

         var link = document.createElement("link");
         link.href = "/themes/cairo/assets/css/dark.css";
         link.type = "text/css";
         link.rel = "stylesheet";
         link.media = "screen,print";

         document.getElementsByTagName("head")[0].appendChild(link);

         darkfile = true;
     }

 }



 // init  pushbar 
 new Pushbar({
     blur: true,
     overlay: true
 });

 // var stickynav = new Sticky('#navbar');
 //var sponser = new Sticky('.sponser');
 /*
  function resizedw() {
      // Haven't resized in 100ms!
      stickynav.update();
  }

  var doit;
  window.onresize = function() {
      clearTimeout(doit);
      doit = setTimeout(resizedw, 100);
  };

 */


 window.onscroll = function() {
     stickyEl();
 };

 var navbar = document.getElementById("navbar");
 var sponserLeft = document.getElementById("stick-l");
 var sponserRight = document.getElementById("stick-r");
 var sticky = navbar.offsetTop + 10;


 function stickyEl() {
     if (window.pageYOffset >= sticky) {
         navbar.classList.add("sticky");
         sponserLeft.classList.add("stickyL");
         sponserRight.classList.add("stickyR");
     } else {
         navbar.classList.remove("sticky");
         sponserLeft.classList.remove("stickyL");
         sponserRight.classList.remove("stickyR");
     }


 }


 // collapse menu 

 var coll = document.getElementsByClassName("dropdown-toggle");
 var i;

 for (i = 0; i < coll.length; i++) {
     coll[i].addEventListener("click", function() {
         this.classList.toggle("active");
         var content = this.nextElementSibling;
         if (hasClass(content, "show")) {
             removeClass(content, 'show');
         } else {
             addClass(content, "show");
         }
     });
 }



 function hasClass(el, className) {
     return el.classList ? el.classList.contains(className) : new RegExp('\\b' + className + '\\b').test(el.className);
 }

 function addClass(el, className) {
     if (el.classList) el.classList.add(className);
     else if (!hasClass(el, className)) el.className += ' ' + className;
 }

 function removeClass(el, className) {
     if (el.classList) el.classList.remove(className);
     else el.className = el.className.replace(new RegExp('\\b' + className + '\\b', 'g'), '');
 }