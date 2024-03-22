// using array to list several img
const images = [
   src ="img.webp",
   src ="img7.jpg",
   src ="img1.webp",
   src ="img2.webp",
   src ="img3.webp",
   src ="img4.webp",
   src ="img5.avif",
   src ="img6.avif",
   src ="img3.jpg",
   src ="img4.jpeg",
  
   src ="https://source.unsplash.com/random"
]

// the current index should start from zero through the length
let currentImageIndex = 0;
let totalImage = images.length;

// creating a function for backward/forward
// forward arrow
function forward() {
    if (currentImageIndex === totalImage - 1) {
        currentImageIndex = 0
    } else {
       currentImageIndex += 1
    }
    goTo()
   }

// backward arrow
function backward() {
 if (currentImageIndex === 0) {
     currentImageIndex = totalImage - 1
 } else {
    currentImageIndex -=1
 }
 goTo()
}