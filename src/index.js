import './style.css';

import {deleteTask} from "./deleteTask.js";
import {showTasks,reload} from "./showTask.js";

export let newTask = document.querySelector('.task-input')
export const add = document.querySelector('.add');
export const list = document.querySelector('.lists');


reload.addEventListener('click' , () => {
  showTasks();
})

export let taskList = JSON.parse(localStorage.getItem('data')) || [];
export let completed = false, index = 1;
export let listArr;

showTasks();

add.addEventListener('click', () => {
  let storedData = localStorage.getItem('data');

  if (storedData === null) {
    listArr = [];
  }
  else {
    listArr = JSON.parse(storedData);
    index = listArr.length + 1;
  }

  let task = {description: newTask.value, completed: completed, index: index};

  listArr.push(task);
  localStorage.setItem('data', JSON.stringify(listArr));
  showTasks();
})

window.completeTask = function (index){
  let storedData = localStorage.getItem('data');
  listArr = JSON.parse(storedData);
  const addedTask = document.querySelector('.task');
  for (let i = 0; i < listArr.length; i++) {
    if (listArr[i].index === index) {
      if (listArr[i].completed === false) {
        listArr[i].completed = true;
        // addedTask.style.textDecoration = 'strikethrough';
      }
      else
        listArr[i].completed = false;
      // addedTask.style.textDecoration = 'none';
    }
  }
  localStorage.setItem('data', JSON.stringify(listArr));
  showTasks();
}


window.editTask = (index) => {
  const saveBtn = document.getElementById("edit"+index+"");
  const editBtn = document.getElementById("save"+index+"");

  saveBtn.style.display = "none";
  editBtn.style.display = "block";

  const specTask = document.getElementById("task"+index+"");

  specTask.removeAttribute('readonly');
  const length = specTask.value.length;
  specTask.setSelectionRange(length, length);
  specTask.focus();

  return specTask;

}

window.saveTask = (index) => {
  const saveBtn = document.getElementById("edit"+index+"");
  const editBtn = document.getElementById("save"+index+"");

  saveBtn.style.display = "block";
  editBtn.style.display = "none";

  const specTask = document.getElementById("task"+index+"");
    let storedData = localStorage.getItem('data');
    listArr = JSON.parse(storedData);
    listArr[index-1].description = specTask.value;


  localStorage.setItem('data', JSON.stringify(listArr));
  showTasks();
}


//delete task function
//
// window.deleteTask =  (index) => {
//   let storedData = localStorage.getItem('data');
//   listArr = JSON.parse(storedData);
//   listArr.splice(index-1,1);
//   for (let i = 0 ; i < listArr.length ; i++) {
//     listArr[i].index = i+1;
//   }
//
//   localStorage.setItem('data', JSON.stringify(listArr));
//   showTasks();
//
// }













































//
// const todoLists = [
//   {
//     description: 'Wash the dishes',
//     completed: false,
//     index: 1,
//   },
//   {
//     description: 'Complete To Do List Project',
//     completed: false,
//     index: 2,
//   },
//   {
//     description: 'Join standup team meeting',
//     completed: false,
//     index: 3,
//   },
// ];
//
// todoLists.sort((a, b) => a.index - b.index);
//
// const listContainer = document.querySelector('.lists');
//
// listContainer.innerHTML = '';
//
// for (let i = 0; i < todoLists.length; i += 1) {
//   listContainer.innerHTML += `<li><button class="toggle"></button><p>${todoLists[i].description}</p></li>`;
// }