/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-mutable-exports */

import { showTasks } from './showTask.js';

let listArr; let index; let
  saveTask;

window.saveTask = (index) => {
  const saveBtn = document.getElementById(`edit${index}`);
  const editBtn = document.getElementById(`save${index}`);

  saveBtn.style.display = 'block';
  editBtn.style.display = 'none';

  const specTask = document.getElementById(`task${index}`);
  const storedData = localStorage.getItem('data');
  listArr = JSON.parse(storedData);
  listArr[index - 1].description = specTask.value;

  localStorage.setItem('data', JSON.stringify(listArr));
  showTasks();
};

export default { saveTask };