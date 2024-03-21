var icon=document.getElementById("icon");
icon.onclick=function(){
    document.body.classList.toggle("dark-theme");
    if( document.body.classList.contains("dark-theme")){
        icon.src="sun.png";
    }else{
        icon.src="moon.png";
    }
}
let scrollContainer=document.querySelector(".gallery");
let backbtn=document.getElementById("backbtn");
let nextbtn=document.getElementById("nextbtn");

scrollContainer.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    scrollContainer.scrollleft+=evt.deltaY;

});
nextbtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior="smooth"
    scrollContainer.scrollLeft+=900;

});
backbtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior="smooth"
    scrollContainer.scrollLeft-=900;
})

