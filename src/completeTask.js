/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-mutable-exports */

import { showTasks } from './showTask.js';

let completeTask; let
  listArr;

window.completeTask = (index) => {
  const storedData = localStorage.getItem('data');
  listArr = JSON.parse(storedData);
  const addedTask = document.querySelector('.task');
  for (let i = 0; i < listArr.length; i += 1) {
    if (listArr[i].index === index) {
      if (listArr[i].completed === false) {
        listArr[i].completed = true;
        // addedTask.style.textDecoration = 'strikethrough';
      } else { listArr[i].completed = false; }
      // addedTask.style.textDecoration = 'none';
    }
  }
  localStorage.setItem('data', JSON.stringify(listArr));
  showTasks();
};

export default { completeTask };