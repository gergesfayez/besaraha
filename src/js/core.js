 // @codekit-prepend "../../node_modules/pushbar.js/src/pushbar.js"

 // dark mode js 


 /*
 var darkfile = false;
 if (localStorage.getItem('theme') !== null && localStorage.getItem('theme') === 'dark') {
     document.body.classList.add('dark-mode');
     addDarkCss();


 } else {
     document.body.classList.add('light-mode');
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
         link.href = "css/dark.css";
         link.type = "text/css";
         link.rel = "stylesheet";
         link.media = "screen,print";

         document.getElementsByTagName("head")[0].appendChild(link);

         darkfile = true;
     }

 }

*/

 // init  pushbar 
 new Pushbar({
     blur: true,
     overlay: true
 });








 window.onscroll = function() {
     stickyEl();
 };

 var navbar = document.getElementById("navbar");
 var sponserLeft = document.getElementById("stick-l");
 var sponserRight = document.getElementById("stick-r");
 var sticky = navbar.offsetTop;


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