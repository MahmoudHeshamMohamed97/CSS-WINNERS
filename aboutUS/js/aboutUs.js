let firstImage = document.querySelector(".img1");
let myImages = document.querySelectorAll(".imgs");
console.log(myImages);
firstImage.addEventListener("mouseover",function(){

    for(let i=0; i<myImages.length; i++){
        myImages[i].style.display = "inline";
        myImages[i].style.animation = "displayAnimated 1s";
        myImages[i].style.opacity = "1";
    }

});


firstImage.addEventListener("click",function(){
    
    for(let i=0; i<myImages.length; i++){
        myImages[i].style.animation = "disappearAnimated 1s";
        myImages[i].style.opacity = "0";
        timeout = setTimeout( function(){        myImages[i].style.display = "none";    } , 900 );
    }

});