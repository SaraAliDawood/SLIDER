// var img = document.querySelector("img");

// document.addEventListener("mousemove" , function(e){
// img.style.left = e.clientX+"px";
// img.style.top = e.clientY+"px";
// }) 


var mainImage = document.getElementById("mainImage")

var imgs = document.querySelectorAll(".item img")
for(var i =0 ; i<imgs.length ; i++){
    imgs[i].addEventListener("click" , function(e){
      var mySrc = e.target.getAttribute("src")
      mainImage.setAttribute("src" , mySrc); 
    })
}
