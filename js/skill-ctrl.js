/*The purpose of thise script is to animate the skill percentage bar*/

const skillBar = document.querySelector('.tech__skill__inner');
const currentSelectedSkill = document.querySelectorAll('.tech__box_info');
const tabButtons = document.querySelectorAll('.tab-buttons');
const skillPercentages = {
  html: 90,
  'css 3': 95,
  javascript: 70,
  linux: 40,
  photoshop: 20
}

let lastSkill = 'html';


tabButtons.forEach(
  function (button, idx) {
    button.addEventListener(
      'click',
      function (button) {
        let btValLower = '' + button.target.childNodes[0].nodeValue;

        skillBar.innerText = `${skillPercentages[btValLower.toLowerCase()]}%`;

        skillBar.classList.remove(lastSkill);
        skillBar.classList.add(`${btValLower.toLowerCase().replace(/\s/, "")}`);
        lastSkill = btValLower.toLowerCase().replace(/\s/, "");

        console.log(getComputedStyle(skillBar).width);
      }
    );
  }
);






