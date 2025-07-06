/*
  This code handles the scroll within the Tech section, 
  for thge buttons inside the tab menu
  when the screen is too small 
*/

//select ther tab container
const techTabContainer = document.querySelector('.tech__tabs-container');

/*
  we add an click event listener to the first element and the last
  and we add to the second element a scroll amount of -200 units when we click the first element,
  and 200 units when we click the last element
  */
techTabContainer.children[0].addEventListener('click', function() {
    techTabContainer.children[1].scrollBy({
      left: -200,
      behavior: 'smooth'
    });
  });
  
  techTabContainer.children[2].addEventListener('click', function() {
    techTabContainer.children[1].scrollBy({
      left: 200,
      behavior: 'smooth'
    });
  });
  