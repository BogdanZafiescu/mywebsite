/*The purpose of thise script is to animate the skill percentage bar*/

const skillBar = document.querySelector('.tech__skill__inner');
const currentSelectedSkill = document.querySelectorAll('.tech__box_info');
const tabButtons = document.querySelectorAll('.tab-buttons');
const skillPercentages = {
  html: 60,
  'css 3': 70,
  javascript: 50,
  linux: 45,
  photoshop: 30,
  java: 50
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






