const navElements = document.querySelectorAll('.nav-bar li');
const innerComponents = document.querySelectorAll('.hero__inner-components');
const sideLinks = document.querySelectorAll('.side-links');

const preloaderOuter = document.querySelector('.preloader__outer');



let navBaseTime = 2200;
let heroCompBaseTime = 3000;


let removeOpacity = () => {
    preloaderOuter.classList.add('hide');
}


let hideContainer = () => {
    preloaderOuter.style.display = 'none';
}


let dropNavComponents = () => {
    navElements.forEach(
        (element, idx) => {
            navBaseTime += 100;
            console.log(navBaseTime);
            setTimeout(
                () => {
                    element.classList.add('drop-navs');
                },
                (navBaseTime)
            );
        }
    );
}

function animateHeroComponents() {
  const innerComponents = document.querySelectorAll('.hero__inner-components');
  let heroCompBaseTime = 0;

  innerComponents.forEach((component, i) => {
    // Set initial styles so that elements start hidden and shifted
    component.style.opacity = '0';
    component.style.transform = component.classList.contains('hero__inner-left') 
      ? 'translateX(-30px)' 
      : 'translateX(30px)';
    component.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

    // Delay increasing by 200ms per component
    heroCompBaseTime = i * 200;

    setTimeout(() => {
      component.style.opacity = '1';
      component.style.transform = 'translateX(0)';
    }, heroCompBaseTime);
  });
}

// Call this after DOM is ready
document.addEventListener('DOMContentLoaded', animateHeroComponents);


function animateSideLinks() {
    setTimeout(
        () => {
            sideLinks.forEach(
                (sideLink) => {
                    sideLink.classList.add('animate__side-links');
                }
            );
        }
        , 4000
    );
}


window.onload = () => {
    setTimeout(removeOpacity, 1500);
    setTimeout(hideContainer, 2000);
    dropNavComponents();
    animateHeroComponents();
    animateSideLinks();
}


