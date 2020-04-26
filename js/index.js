var prev = window.pageYOffset;
var websiteName = document.getElementById("websiteName");
var firstLook = document.getElementById("firstLook");

// This function change the name of website on scrolling
document.addEventListener("scroll",function(){
    var current = window.pageYOffset;
    if( current > prev ){
        websiteName.innerHTML = "WINNNNNERS.";
        firstLook.classList.add("d-none");
    }
    else{
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
searchBtn.addEventListener("click",function(){
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
function closeTab(){
    routeWinners.style.justifyContent = "space-between";
    websiteCenter.style.width = "unset";
    searchBtn.classList.remove("d-none");
    buttons.classList.remove("d-none");
    websiteCenter.innerHTML=`<a href="#"><h3 id="websiteName">ROUTE WINNERS.</h3></a>`;
}

// a button opens new window to help user submit his projects on site
var btnClass = document.querySelector(".btnClass");
btnClass.addEventListener("click", function(){
    window.open("submitSite/submitSite.html");
});


// shehab's section
var log_reg = document.querySelector("#buttons h6");
log_reg.addEventListener("click",function(){
    /* 
        display layer and form of registeration or login
    */
});