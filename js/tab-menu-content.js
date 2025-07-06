/*-
    Here we are showing one of the elements inside the tab container, when it's coresponding button has been clicked
    while hiding the others
*/

const buttons = document.querySelectorAll('.tab-buttons');
const techBoxInfo = document.querySelectorAll('.tech__box_info');

buttons.forEach(
    function (button, index) {
        button.addEventListener('click', function () {
            for (let i = 0; i < techBoxInfo.length; i++) {
                techBoxInfo[i].classList.remove('active');
                techBoxInfo[i].classList.add('inActive');
                techBoxInfo[i].style.opacity = '0';
            }

            techBoxInfo[index].classList.remove('inActive');
            techBoxInfo[index].classList.add('active');
            setTimeout(
                function () {
                    techBoxInfo[index].style.opacity = '1';
                }, 100
            );
        });
    }
);
