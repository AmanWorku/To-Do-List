/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-mutable-exports */

import { list, newTask } from './index.js';
import { deleteTask } from './deleteTask.js';

export const reload = document.querySelector('.fa-arrows-rotate');
let listArr; let index;

export const showTasks = () => {
  const storedData = localStorage.getItem('data');
  // index = 0;
  if (storedData === null) {
    listArr = [];
  } else {
    listArr = JSON.parse(storedData);
    index = listArr.length + 1;
  }

  let newLiTag = '';
  listArr.forEach((element) => {
    newLiTag += `<li>
       <div class="left">
       <input type="checkbox" onclick="completeTask(${element.index});">
       <input type="text" class="task" id="task${element.index}" value="${element.description}" readonly>
       </div>
       <div class="right">
       <i class="fa-solid fa-pen-to-square edit " id="edit${element.index}" onclick="editTask(${element.index});"></i>
       <i class="fa-solid fa-floppy-disk save hide" id="save${element.index}" onclick="saveTask(${element.index});"></i>
       <i class="fa-solid fa-trash delete" id="del" onclick="deleteTask(${element.index});"></i>       
</div>
       </li><hr>`;
  });
  list.innerHTML = newLiTag;
  newTask.focus();
};
