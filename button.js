// created an image element
function createIMG() {
    const img = document.createElement('img')
            img.src='icons8-back-64.png';

  return img
}

// got the element from html
const leftButton = document.querySelector("button.left");
const rightButton = document.querySelector("button.right");

// added the created element to the existing one in html
leftButton.appendChild(createIMG());

rightButton.appendChild(createIMG());

