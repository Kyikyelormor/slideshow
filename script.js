
// select the main from html
const main = document.querySelector("main")

//
main.style.backgroundImage = `url(${images[0]})`;

function goTo() {
    main.style.backgroundImage = `url(${images[currentImageIndex]})`;
}

// added an event listener go back
leftButton.addEventListener("click", 
function() {
    backward();
    goTo();
}
);

// added an event listener to go forward
rightButton.addEventListener("click", 
function() {
    forward();
    goTo();
}
);

// 
setInterval(function() {
 forward();
 goTo();
}, 1000);







// add event handler 
// leftButton.addEventListener('click', 
// function () {
    // added a toggle
//   const color = main.style.background === "blue" ? "beige" : "blue" ;
//    main.style.background = color ;
  // main.innerHTML += createIMG();
// })