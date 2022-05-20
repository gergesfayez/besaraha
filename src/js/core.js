<<<<<<< HEAD
 
// @codekit-prepend "../../node_modules/pushbar.js/src/pushbar.js"
 // dark mode js 
 /*var darkfile = false;
=======
 // @codekit-prepend "../../node_modules/pushbar.js/src/pushbar.js"

 // dark mode js  
 /*
 var darkfile = false;
>>>>>>> 3ef62278f65874bb410451faea57be42d35419cf
 if (localStorage.getItem('theme') !== null && localStorage.getItem('theme') === 'dark') {
     document.body.classList.add('dark-mode');
     addDarkCss();

 } else {
     document.body.classList.add('light-mode');
 }

<<<<<<< HEAD
  function mode() {
     var element = document.body;
     element.classList.toggle("dark-mode");
     if (localStorage.getItem('theme') !== null && localStorage.getItem('theme') === 'light') {
         localStorage.setItem('theme', 'dark');
         addDarkCss();
         document.body.classList.add('dark-mode');
=======
 } else {
     document.body.classList.add('light-mode');
 }
>>>>>>> 3ef62278f65874bb410451faea57be42d35419cf


         document.body.classList.remove('light-mode');
     } else {
         localStorage.setItem('theme', 'light');
         document.body.classList.remove('dark-mode');
         document.body.classList.add('light-mode');
     }

<<<<<<< HEAD

 }
=======
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
>>>>>>> 3ef62278f65874bb410451faea57be42d35419cf

 function addDarkCss() {

<<<<<<< HEAD
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
     blur: false,
     overlay: true,
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




/*
const nav = document.querySelector('#header');
const navTop = nav.offsetTop;

function stickyNavigation() {
  console.log('navTop = ' + navTop);
  console.log('scrollY = ' + window.scrollY);

  if (window.scrollY >= navTop) {
    // nav offsetHeight = height of nav
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('sticky');
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('sticky');
  }
}
window.addEventListener('scroll', stickyNavigation);

*/
 var navbar = document.getElementById("navbar");
 //var sponserLeft = document.getElementById("stick-l");
 //var sponserRight = document.getElementById("stick-r");
 var sticky = document.body.offsetTop + 20;
 var state = 1;

function stickyEl() {
    // console.log('navTop = ' + sticky);
     if (state === 1 && window.pageYOffset >= sticky) {
         state = 2;
         navbar.classList.add("sticky");


      //   sponserLeft.classList.add("stickyL");
      //   sponserRight.classList.add("stickyR");




     } else if (state === 2 && window.pageYOffset < sticky) {
         state = 1;
         navbar.classList.remove("sticky");
       //  sponserLeft.classList.remove("stickyL");
       //  sponserRight.classList.remove("stickyR");

     }


}
 


 window.onscroll = function () {
=======

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

*/

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
>>>>>>> 3ef62278f65874bb410451faea57be42d35419cf
     stickyEl();

 };

<<<<<<< HEAD
 function openSearch() {
     var search = document.getElementById("searchInline");
     search.classList.add('open');
     document.getElementById("search").focus();
 }

 function closeSearch() {
     var search = document.getElementById("searchInline");
     var form = document.getElementById("search-form");
     search.classList.remove('open');
     form.reset();
=======
 var navbar = document.getElementById("navbar");
 var sponserLeft = document.getElementById("stick-l");
 var sponserRight = document.getElementById("stick-r");
 var sticky = navbar.offsetTop + 10;
 var state = 1;

 function stickyEl() {
     if (state === 1 && window.pageYOffset >= sticky) {
         state = 2;
         navbar.classList.add("sticky");


         sponserLeft.classList.add("stickyL");
         sponserRight.classList.add("stickyR");




     } else if (state === 2 && window.pageYOffset < sticky) {
         state = 1;
         navbar.classList.remove("sticky");
         sponserLeft.classList.remove("stickyL");
         sponserRight.classList.remove("stickyR");

     }

>>>>>>> 3ef62278f65874bb410451faea57be42d35419cf

 }


 // collapse menu 

 var coll = document.getElementsByClassName("dropdown-toggle");
 var i;

 for (i = 0; i < coll.length; i++) {
<<<<<<< HEAD
     coll[i].addEventListener("click", function () {
=======
     coll[i].addEventListener("click", function() {
>>>>>>> 3ef62278f65874bb410451faea57be42d35419cf
         this.classList.toggle("active");
         var content = this.nextElementSibling;
         if (hasClass(content, "show")) {
             removeClass(content, 'show');
         } else {
             addClass(content, "show");
         }
     });
 }

<<<<<<< HEAD
=======
 ///back to top

 function scrollToTop() {
     var position =
         document.body.scrollTop || document.documentElement.scrollTop;
     if (position) {
         window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
         scrollAnimation = setTimeout("scrollToTop()", 5);
     } else clearTimeout(scrollAnimation);
 }
>>>>>>> 3ef62278f65874bb410451faea57be42d35419cf


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