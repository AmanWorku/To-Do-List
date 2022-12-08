/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-mutable-exports */

import { showTasks } from './showTask.js';

export let listArr; export let index;

let deleteTask;
window.deleteTask = (index) => {
  const storedData = localStorage.getItem('data');
  listArr = JSON.parse(storedData);
  listArr.splice(index - 1, 1);
  for (let i = 0; i < listArr.length; i += 1) {
    listArr[i].index = i + 1;
  }
  localStorage.setItem('data', JSON.stringify(listArr));
  showTasks();
};

export { deleteTask };