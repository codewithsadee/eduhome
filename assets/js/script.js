'use strict';



/**
 * element toggle function
 */

const toggleElem = function (elem) { elem.classList.toggle("active"); }



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

for (let i = 0; i < navTogglers.length; i++) {
  navTogglers[i].addEventListener("click", function () {
    toggleElem(navbar);
    toggleElem(overlay);
  });
}



/**
 * header sticky & back to top button
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
    header.classList.add("header-anim");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
    header.classList.remove("header-anim");
  }
});



/**
 * search box toggle
 */

const searchTogglers = document.querySelectorAll("[data-search-toggler]");
const searchBox = document.querySelector("[data-search-box]");

for (let i = 0; i < searchTogglers.length; i++) {
  searchTogglers[i].addEventListener("click", function () {
    toggleElem(searchBox);
  });
}



/**
 * whishlist button toggle
 */

const whishlistBtns = document.querySelectorAll("[data-whish-btn]");

for (let i = 0; i < whishlistBtns.length; i++) {
  whishlistBtns[i].addEventListener("click", function () {
    toggleElem(this);
  });
}



// aboutus js

$(".tab_content").hide();
$(".tab_content:first").show();

/* if in tab mode */
$("ul.tabs li").click(function() {

  $(".tab_content").hide();
  var activeTab = $(this).attr("rel"); 
  $("#"+activeTab).fadeIn();		

  $("ul.tabs li").removeClass("active");
  $(this).addClass("active");

$(".tab_drawer_heading").removeClass("d_active");
$(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");

});
/* if in drawer mode */
$(".tab_drawer_heading").click(function() {
  
  $(".tab_content").hide();
  var d_activeTab = $(this).attr("rel"); 
  $("#"+d_activeTab).fadeIn();

$(".tab_drawer_heading").removeClass("d_active");
  $(this).addClass("d_active");

$("ul.tabs li").removeClass("active");
$("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
});


/* Extra class "tab_last" 
 to add border to right side
 of last tab */
$('ul.tabs li').last().addClass("tab_last");

// aboutus js 