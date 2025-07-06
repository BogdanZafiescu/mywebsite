/*
    The code here handles navbar animations
*/

const shrinkSize = '52px';
const normalSize = '64px';
const nav = document.querySelector('.nav-bar');
const progressCtnerBar = document.querySelector('.progress-container__bar');
const progressCtner = document.querySelector('.progress-container');
const navbarSvg = document.querySelector('.nav-bar__home-wrap svg');
const navBarLine = document.querySelector('.nav-bar__button-line');


function shrinkNav() {
    /*use destructuring to get the needed values*/
    const { clientHeight, scrollTop, scrollHeight } = document.documentElement;
    let totalToScroll = scrollHeight - clientHeight;
    let scrollPercentage = (scrollTop / totalToScroll) * 100;
   
    if(scrollPercentage > 0){
        nav.style.minHeight = shrinkSize;
        nav.style.color = 'black';
        nav.style.backgroundColor = 'rgba(0, 0, 0, .900)';
        navbarSvg.classList.add('hasFifthColor');
        navBarLine.classList.add('hasFifthColor');
        progressCtnerBar.style.backgroundColor ="#CDFF2E";
        progressCtner.style.backgroundColor = '#543BFF';
    } else {
        progressCtnerBar.style.backgroundColor ="transparent";
        nav.style.color = 'white';
        nav.style.backgroundColor = 'transparent';
        nav.style.minHeight = normalSize;
        progressCtner.style.backgroundColor = 'transparent';
        navbarSvg.classList.remove('hasFifthColor');
        navBarLine.classList.remove('hasFifthColor');
    }
}


window.addEventListener(
    'scroll', shrinkNav
);