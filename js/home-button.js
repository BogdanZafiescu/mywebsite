/*
  This script scrolls to the top or bottom of the page
  and when it reaches the target rotates the home button 
  in the oposite direction
*/

//give access to the triangle icon for the purpose of rotating it 
const triangleLink = document.querySelector('.nav-bar__home-wrap a svg');

//give access to the top and bottom elements of the page to use them as targets for scrolling
const hero = document.querySelector('.hero');
const base = document.querySelector('.base');

//create a flag that will be used to tell JS the last location of the viewport
let wasTop = true;

//declare some variables to check viewport's scroll position (to see if it is located at the top or bottom)
let clientHeight;
let scrollHeight;
let scrolledDistance = 0;
let maxWindowScroll;

//define functions that rotate the triangle 
function rotateTriangleDown() {
  triangleLink.style.transform = 'rotate(180deg)';
}

function rotateTriangleUp() {
  triangleLink.style.transform = 'rotate(0deg)';
}

function show_message() {
  console.log(clientHeight);
  console.log(scrollHeight);
  console.log('scroll distance ' + scrolledDistance);
  console.log('maximum scroll ' + maxWindowScroll);
}

//handle the rotation of the triangle onscroll
window.onscroll = () => {
  clientHeight = document.documentElement.clientHeight;
  scrollHeight = document.documentElement.scrollHeight;
  scrolledDistance = document.documentElement.scrollTop;
  maxWindowScroll = scrollHeight - clientHeight;

  console.log(scrolledDistance);

  if (wasTop && (scrolledDistance == maxWindowScroll)) {
    show_message();
    rotateTriangleUp();
    wasTop = false;
  } else if(!wasTop && (scrolledDistance == 0) ){
    show_message();
    rotateTriangleDown();
    wasTop = true;
  }
}

//handle the position of the viewport after clicking the home triangle button
triangleLink.addEventListener('click', function (e) {
  e.preventDefault();

  if (wasTop) {
    console.log('window is top: ' + wasTop);
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
    
  } else {
    console.log('window is top: ' + wasTop);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

});


