/*
    This code opens or closes a hidden menu 
*/

// Select the hamburger button element with the class 'nav-bar__button'
const hamButton = document.querySelector('.nav-bar__button');

// Select the hidden menu
const hiddenMenu = document.querySelector('.hidden-menu');

// Select the menu links 
const menuElement = document.querySelectorAll('.hidden-menu a');

/*Hiding menu*/
function hideMenu() {

    // Toggle the 'isVisible' class on the hidden menu
    hiddenMenu.classList.toggle('isVisible');

    // Set a timeout to gradually change the opacity of the hidden menu to '1' after 100 milliseconds
    setTimeout(

        () => {

            hiddenMenu.style.opacity = '1';

        },

        100

    );

}

/*Showing menu*/
function showMenu() {

    hiddenMenu.style.opacity = '0';

    setTimeout(

        () => {

            hiddenMenu.classList.toggle('isVisible');

        },
        300
    );
}

// Add a click event listener to the hamburger button to activate show or hide menu
hamButton.addEventListener(

    'click',
    
    function toggleMenu() {
        
        hamButton.classList.toggle('active');

        if (!hiddenMenu.classList.contains('isVisible')) {

            hideMenu();
        } else {
            
            showMenu();
        }
    }
);


//hide the menu everytime a button inside the menu is clicked 
menuElement.forEach((val, idx) => {

    menuElement[idx].addEventListener(

        'click',

        (ev) => {

            console.log('click');

            // Toggle the 'active' class on the hamburger button to rotate the button
            hamButton.classList.toggle('active');

            hideMenu();
        }
    );
});

//hide menu & reset button for window widths over 600px 
window.addEventListener('resize', function() {
    //button reset
    hamButton.classList.remove('active');

    //for every resize we memorize the window width
    var windowWidth = window.innerWidth;

    // and  we check if it's over 600 and if it is vissible
    if (windowWidth >= 600 && hiddenMenu.classList.contains('isVisible') ) {

        //we hide the menu 
        hideMenu();

    }

  });
  