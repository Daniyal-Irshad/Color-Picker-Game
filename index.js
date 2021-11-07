//Functions Used
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
function randomRgbGenerator(){
    return `rgb(${getRandomInt(0,256)},${getRandomInt(0,256)},${getRandomInt(0,256)})`;
}
function settingUpUI(){
    circlesContainer.innerHTML="";
    for(var i=0;i<6;i++){
        circlesContainer.insertAdjacentHTML('beforeend',
        `<div class="circleWrapper flex">
            <div style="background:${randomRgbGenerator()}" class="circle"></div>
        </div>`);
    }
    circles=Array.from(document.querySelectorAll(".circle"));    
    randomNumberForAns=getRandomInt(0,6);
    ans=circles[randomNumberForAns].style.background;
    ansNode.textContent = ans;
}
//Variables Used
var container=document.querySelector(".container");
var circlesContainer=document.querySelector(".circles");
var circles = null;
var ans = null;
var randomNumberForAns=getRandomInt(0,6);
var ansNode=document.querySelector(".answer");
var optionalMenu=document.querySelector(".optionalMenu");
settingUpUI();
//Listeners Used
circlesContainer.addEventListener("click",function(extraInfo){
    if(Array.from(extraInfo.target.classList).includes("circle")){
        var ansPicked=extraInfo.target.style.background;
        if(ansPicked===ans){
            console.log("You Won");
            circles.forEach(function(circle){
                if(circle.style.background!==ans){
                    circle.style.opacity=0;
                }
            });
            container.style.background=ans;
        }
        else{
            console.log("Try Again");
            extraInfo.target.style.opacity=0;
        }
    }
});
var resetBtn=document.querySelector(".reset");
resetBtn.addEventListener("click",function(){
    settingUpUI();
});