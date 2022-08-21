function calc() {
     //callories

     const resultCalc = document.querySelector('.calculating__result span');
     let sex, height, weight, age, activity;
     if (localStorage.getItem('sex')) {
         sex = localStorage.getItem('sex');
     } else {
         sex = 0;
     }
     if (localStorage.getItem('activity')) {
         activity = localStorage.getItem('activity');
     } else {
         activity = 0;
     }
     function calcCalories() {
         if (!sex || !height || !weight || !age || !activity) {
             resultCalc.textContent = '____';
             return;
         }
         if (sex === 'woman') {
             resultCalc.textContent = Math.round((655.1 + (9.563 * weight) + (1.85 * height) - (4.676 * age)) * activity);
         } else {
             resultCalc.textContent = Math.round((66.5 + (13.75 * weight) + (5.03 * height) - (6.775 * age)) * activity);
         }
     }
     calcCalories();
     function getStaticInformation(selector, activeClass) {
         const elements = document.querySelectorAll(`${selector} div`);
         elements.forEach(item => {
             item.addEventListener('click', (e) => {
                 if (e.target.getAttribute('data-activity')) {
                     activity = +e.target.getAttribute('data-activity');
                     localStorage.setItem('activity', +e.target.getAttribute('data-activity'));
                 } else {
                     sex = e.target.getAttribute('id');
                     localStorage.setItem('sex', e.target.getAttribute('id'));
                 }
                 elements.forEach(item => {
                     item.classList.remove(activeClass);
                 });
                 e.target.classList.add(activeClass);
 
                 
                 calcCalories();
             });
         });
     }
     getStaticInformation('#gender', 'calculating__choose-item_active');
     getStaticInformation('.calculating__choose_big', 'calculating__choose-item_active');
     function getDynamicInformation(selector) {
         const elements = document.querySelector(selector);
         elements.addEventListener('input', () => {
             if (elements.value.match(/\D/)) {
                 elements.style.border = '1px solid red';
             } else {
                 elements.style.border = 'none';
             }
             switch (elements.getAttribute('id')) {
                 case 'height':
                     height = +elements.value;
                     break;
                 case 'weight':
                     weight = +elements.value;
                     break;
                 case 'age': 
                     age = +elements.value;
                     break;
             }
             calcCalories();
         });
     }
     getDynamicInformation('#height');
     getDynamicInformation('#weight');
     getDynamicInformation('#age');
}
export default calc;