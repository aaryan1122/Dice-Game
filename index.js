if (window.performance.navigation.type===1) {
    rolldice()
}
function rolldice() {
var randomNumber0=Math.floor(Math.random()*6+1)
var randomNumber1=Math.floor(Math.random()*6+1)
var randomImage0="images/"+"dice"+randomNumber0+".png"
var randomImage1="images/"+"dice"+randomNumber1+".png"
document.querySelectorAll("img")[0].setAttribute("src",randomImage0)
document.querySelectorAll("img")[1].setAttribute("src",randomImage1)
if (randomNumber0>randomNumber1) {
    document.querySelector("h1").innerHTML="Player 1 Wins🚩"   
}
else if(randomNumber0===randomNumber1){
    document.querySelector("h1").innerHTML="It's A Draw"
}
else{
    document.querySelector("h1").innerHTML="Player 2 Wins🚩"
}
}
