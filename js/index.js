// import {User} from './classes.js';
var prev = window.pageYOffset,
    websiteName = document.getElementById("websiteName"),
    firstLook = document.getElementById("firstLook"),
    searchBtn = document.getElementById("searchBtn"),
    websiteCenter = document.getElementById("websiteCenter"),
    buttons = document.getElementById("buttons"),
    searchBar = document.getElementById("searchBar"),
    routeWinners = document.querySelector(".routeWinners"),
    close = document.getElementById("close"),
    btnClass = document.querySelector(".btnClass"),
    disappearedLayer = document.querySelector(".disappearedLayer"),
    header = document.getElementsByTagName("header")[0],
    navbar = document.querySelector(".navbar"),
    myBody = document.getElementById("translatedArea"),
    menuBar = document.querySelector(".menuBar"),
    closeLeftMenu = document.getElementById("closeLeftMenu"),
    openLeftMenu = document.getElementById("openLeftMenu"),
    english = document.querySelectorAll("#english"),
    english1 = document.querySelector("#english1"),
    languages = document.getElementById("languages"),
    info = document.getElementById("info") ;

// This function change the name of website on scrolling
document.addEventListener("scroll", function () {
    var current = window.pageYOffset;
    if (current > prev) {
        websiteName.innerHTML = "WINNNNNERS.";
        try{
            firstLook.classList.add("d-none");
        }
        catch{
            // console.log("This bar isn't here");
        }
    }
    else {
        websiteName.innerHTML = "ROUTE WINNERS.";
        try{
            firstLook.classList.remove("d-none");
        }
        catch{
            // console.log("This bar isn't here");
        }
    }
    prev = current;
});


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

// This function the close tag of the search bar
function closeTab() {
    routeWinners.style.justifyContent = "space-between";
    websiteCenter.style.width = "unset";
    searchBtn.classList.remove("d-none");
    buttons.classList.remove("d-none");
    websiteCenter.innerHTML = `<a href="#"><h3 id="websiteName">ROUTE WINNERS.</h3></a>`;
}

// a button opens new window to help user submit his projects on site
btnClass.addEventListener("click", function () {
    let anchor = document.querySelector(".btnClass a");
    window.open(anchor.href);
});


// shehab's section
var log_reg = document.querySelector("#buttons h6");
log_reg.addEventListener("click", function () {
    /* 
        display layer and form of registeration or login
    */
});


/* Start of menu's animation */
// Opens Left Menu
openLeftMenu.addEventListener("click", function () {
    openLeftMenuFunc();
});
function openLeftMenuFunc(){    
    // setTimeout(function () {
    //     menuBar.style.right = "unset";
    //     menuBar.style.left = "0";
    //     myBody.style.transform = "translateX(330px)";
    // }, 1000);
    // menuBar.style.animation = "openMenuBar 1s";
    $(".menuBar").animate({left:0},1000);
    // myBody.style.animation = "translateBodyOpen 1s";
    // $("#translatedArea").animate( {transform: "translateX(330px)"} , 1000 );
    $("#translatedArea").animate({left: "330px" },1000);
    disappearedLayer.classList.remove("d-none");
    navbar.style.position = "unset";
    header.style.marginBottom = "unset";
    document.body.style.overflow = "hidden";
}
// Close the Left Menu using closeLeftMenuFunc below
closeLeftMenu.addEventListener("click", function () {
    closeLeftMenuFunc();
});
function closeLeftMenuFunc() {
    setTimeout(function () {
        // menuBar.style.right = "100%";
        // menuBar.style.left = "unset";
        // myBody.style.transform = "unset";
        header.style.marginBottom = "130px";
        navbar.style.position = "fixed";
        disappearedLayer.classList.add("d-none");
        document.body.style.overflow = "unset";
    }, 1000);

    $(".menuBar").animate({left:"-330px"},1000);
    $("#translatedArea").animate({left: "0px" },1000);
    

    // menuBar.style.animation = "closeMenuBar 1s";
    // myBody.style.animation = "translateBodyClose 1s";

    try{
        setTimeout( function(){
            languages.classList.add("d-none");
            info.classList.remove("d-none");
            english1.innerHTML = "English";
        } , 1000 );
    }
    catch{}
}
// Close the Left Menu using closeLeftMenuFunc below when clicks on the screen
disappearedLayer.addEventListener("click", function (e) {
    closeLeftMenuFunc();
});
/* End of menu's animation */



/* Languages Part */
// this loop on all the links that changes the language
for(let i=0; i<english.length; i++){
    //onclick opens the menu then display the languages and disappear all the data in the menu before
    english[i].addEventListener("click",function(){
        openLeftMenuFunc();
        languages.classList.remove("d-none");
        english1.innerHTML = "Back";
        info.classList.add("d-none");
    });
}
// this element hast different id to change it's name on click to return the menu's data back and change it again
// to languages if we want.
english1.addEventListener("click",function(){
    if(english1.innerHTML.toLowerCase() == "back"){
        languages.classList.add("d-none");
        info.classList.remove("d-none");
        english1.innerHTML = "English";
    }
    else{
        languages.classList.remove("d-none");
        info.classList.add("d-none");
        english1.innerHTML = "Back";
    }
});
/* End of Languages Part */



/* still not working */
var myAnchors = document.querySelectorAll(".myUL a");
for (let i = 0; i < myAnchors.length; i++) {
    myAnchors[i].addEventListener("click", function () {
        closeLeftMenuFunc();
        setTimeout(function () {
            location.href(myAnchors[i].href);
        }, 10000);
    });
}