const mainElements = document.querySelectorAll('.main__element');



window.addEventListener(
    'scroll',
    function(event){
        mainElements.forEach(
            function(element,idx){
                if(element.getBoundingClientRect().top < 700){
                    element.classList.add('hasFadeIn');
                    console.log(element.getBoundingClientRect().top);
                }
                
            }
        );
    }
);