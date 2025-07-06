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

    for (let i = 0; i < innerComponents.length; i++) {

        heroCompBaseTime += 200
        console.log('hero show component at time ' + heroCompBaseTime);
        setTimeout(() => {
            innerComponents[i].style.opacity = "1";
            innerComponents[i].style.transform = "translateX(0px)";
        }, heroCompBaseTime);
    }
}

function animateSideLinks() {
    setTimeout(
        () => {
            sideLinks.forEach(
                (sideLink) => {
                    sideLink.classList.add('animate__side-links');
                }
            );
        }
        , 4600
    );
}


window.onload = () => {
    setTimeout(removeOpacity, 1500);
    setTimeout(hideContainer, 2000);
    dropNavComponents();
    animateHeroComponents();
    animateSideLinks();
}


