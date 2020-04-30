var prev = window.pageYOffset;
var websiteName = document.getElementById("websiteName");
var firstLook = document.getElementById("firstLook");

// This function change the name of website on scrolling
document.addEventListener("scroll", function () {
    var current = window.pageYOffset;
    if (current > prev) {
        websiteName.innerHTML = "WINNNNNERS.";
        firstLook.classList.add("d-none");
    }
    else {
        websiteName.innerHTML = "ROUTE WINNERS.";
        firstLook.classList.remove("d-none");
    }
    prev = current;
});

var searchBtn = document.getElementById("searchBtn");
var websiteCenter = document.getElementById("websiteCenter");
var buttons = document.getElementById("buttons");
var searchBar = document.getElementById("searchBar");
var routeWinners = document.querySelector(".routeWinners");
// On this function i display and disappear the search bar in the navbar
searchBtn.addEventListener("click", function () {
    searchBtn.classList.add("d-none");
    buttons.classList.add("d-none");
    routeWinners.style.justifyContent = "start";
    websiteCenter.style.width = "inherit";
    websiteCenter.innerHTML = `<input type="text" placeholder="SEARCH FOR INSPIRATION (HTML5, VR, RED, MINIMAL...)"
    onkeyup="searchOnProject(this.value)" class="searchTxt" />
    <div class="float-right" id="close" onclick="closeTab()"><i class="fas fa-times fa-2x"></i></div>
    <div class="clearfix"></div>
    `;
});

var close = document.getElementById("close");
function closeTab() {
    routeWinners.style.justifyContent = "space-between";
    websiteCenter.style.width = "unset";
    searchBtn.classList.remove("d-none");
    buttons.classList.remove("d-none");
    websiteCenter.innerHTML = `<a href="#"><h3 id="websiteName">ROUTE WINNERS.</h3></a>`;
}

// a button opens new window to help user submit his projects on site
var btnClass = document.querySelector(".btnClass");
btnClass.addEventListener("click", function () {
    window.open("submitSite/submitSite.html");
});


// shehab's section
var log_reg = document.querySelector("#buttons h6");
log_reg.addEventListener("click", function () {
    /* 
        display layer and form of registeration or login
    */
});


/* Start of menu's animation */
var disappearedLayer = document.querySelector(".disappearedLayer");
var header = document.getElementsByTagName("header")[0];
var navbar = document.querySelector(".navbar");
var myBody = document.getElementById("translatedArea");
var menuBar = document.querySelector(".menuBar");
var closeLeftMenu = document.getElementById("closeLeftMenu");
closeLeftMenu.addEventListener("click", function () {
    closeLeftMenuFunc();
});
function closeLeftMenuFunc(){
    setTimeout(function () {
        menuBar.style.right = "100%";
        menuBar.style.left = "unset";
        myBody.style.transform = "unset";
        header.style.marginBottom = "130px";
        navbar.style.position = "fixed";
        disappearedLayer.classList.add("d-none");
    }, 1000);
    menuBar.style.animation = "closeMenuBar 1s";
    myBody.style.animation = "translateBodyClose 1s";
}

var openLeftMenu = document.getElementById("openLeftMenu");
openLeftMenu.addEventListener("click", function () {
    setTimeout(function () {
        menuBar.style.right = "unset";
        menuBar.style.left = "0";
        myBody.style.transform = "translateX(330px)";
    }, 1000);
    menuBar.style.animation = "openMenuBar 1s";
    myBody.style.animation = "translateBodyOpen 1s";
    disappearedLayer.classList.remove("d-none");
    navbar.style.position = "unset";
    header.style.marginBottom = "unset";
});
/* End of menu's animation */

/* still not working */
var myAnchors = document.querySelectorAll(".myUL a");
for (let i = 0; i < myAnchors.length; i++) {
    myAnchors[i].addEventListener("click", function () {
        closeLeftMenuFunc();
        setTimeout(function(){
            location.href(myAnchors[i].href);
        }, 10000);
    });
}