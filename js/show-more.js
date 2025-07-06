/*dispolay extra card groups*/

// Select the 'show-more' button"
const button = document.querySelector('.projects__show-more__container button');

// Select all projects__card's
const projectCards = document.querySelectorAll('.projects__initial-card-position');



// Counters for the number of shown items, groups of items or items that have been reseted
let itemsShown;
let groupsOfItemsShown = 0;
let itemsReset = 0;

// How many items to be shown at a time
const toBeShown = 6;

// Show if reset operation is done
let resetIsDone = false;

// Show or hide content onclick
button.onclick = function () {
  console.log('runing');
  // Check if 2 groups have been shown
  if (groupsOfItemsShown === 2) {
    console.log('2 groups have been shown!');

    // Select the 'projects' id to use it as a scroll target when 'Show less' is activated 
    const projectTarget = document.getElementById('projects');

    //Reset the scroll to the top of the 'projects' container
    projectTarget.scrollIntoView();
    

    // Wait  280ms to avoid displaying the contact section and Hide  all project cards that are after the first 6

    console.log('hide items !!!!!!!!!');
    projectCards.forEach(function (val, idx) {
      if (idx > 5) {
        console.log('Item index is greater than 5');
        console.log('Changing item with idx ' + idx);
        //turn opacity to 0
        projectCards[idx].style.opacity = '0';
        //wait for opacity to finish and hide the containers
        setTimeout(
          () => { projectCards[idx].classList.add('hidden'); },
          280
        );
      }
    });




    console.log('Resetting button text');
    button.textContent = 'Show more';

    // Say that reset has been done to prepare for the next click 
    resetIsDone = true;
  }

  // Check if there are less than 2 groups of items shown
  if (groupsOfItemsShown < 2) {

    // Start counting the shown items from 0 
    itemsShown = 0;

    // Run through project cards and show a group of 6 hidden cards
    projectCards.forEach(function showMore(val, idx) {

      // Verify if the card is currently hidden and if other items can be shown
      if (projectCards[idx].classList.contains('hidden') && itemsShown < toBeShown) {
        projectCards[idx].classList.toggle('hidden'); // Show the card
        //make sure that the opacity is 0 when the code first runs
        projectCards[idx].style.opacity = '0';
        
        //turn opacity to 1
        setTimeout(
          () => {
            projectCards[idx].style.opacity = '1';
          },
          100
        );
        itemsShown++; // Count how many items have been shown
      }
    });

    groupsOfItemsShown++; // Increment the counter for every group shown

    // If two groups are shown, update the button's content
    if (groupsOfItemsShown === 2) {
      button.textContent = 'Show less';
    }
  }

  // Check if the reset operation is done
  if (resetIsDone) {
    groupsOfItemsShown = 0; // Reset the shown groups counter for shown groups to be able to show  the items again
    resetIsDone = false; // Reset the flag for so that reset can be used again for the next run 
  }
}