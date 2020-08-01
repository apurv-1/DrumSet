for(var i=0;i<7;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

var buttonl = this.innerHTML;
makeSound(buttonl);
buttonAnimation(buttonl);
});}
document.addEventListener("keypress",function(){
  makeSound(event.key);
  buttonAnimation(event.key);
});
function makeSound(key)
     {switch (key) {
       case "a":
       var soundw = new Audio("./sounds/tom-1.mp3");
       soundw.play();
         break;
         case "s":
         var sound2 = new Audio("./sounds/tom-2.mp3");
         sound2.play();
           break;
           case "d":
           var sound3 = new Audio("./sounds/tom-3.mp3");
           sound3.play();
             break;
          case "f":
          var sound4 = new Audio("./sounds/tom-4.mp3");
          sound4.play();
            break;
         case "j":
         var sound5 = new Audio("./sounds/snare.mp3");
         sound5.play();
           break;
        case "k":
        var sound6 = new Audio("./sounds/crash.mp3");
        sound6.play();
          break;
       case "l":
       var sound7 = new Audio("./sounds/kick-bass.mp3");
       sound7.play();
         break;

       default: console.log(this.innerHTML);
}}
function buttonAnimation(currentkey)
{
var saku= document.querySelector("." + currentkey);
saku.classList.add("pressed");
setTimeout(function(){
  saku.classList.remove("pressed");
},100);
}
