/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-mutable-exports */

import { showTasks } from './showTask.js';
import { completed, newTask } from './index.js';

let index; let
  listArr;
export default function addT() {
  const storedData = localStorage.getItem('data');

  if (storedData === null) {
    listArr = [];
  } else {
    listArr = JSON.parse(storedData);
    index = listArr.length + 1;
  }

  const task = { description: newTask.value, completed, index };

  listArr.push(task);
  localStorage.setItem('data', JSON.stringify(listArr));
  return showTasks();
}
