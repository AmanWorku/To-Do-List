/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-mutable-exports */

import './style.css';
import { deleteTask } from './deleteTask.js';
import editTask from './editTask.js';
import saveTask from './saveTask.js';
import completeTask from './completeTask.js';
import addT from './addTask.js';
import { showTasks, reload } from './showTask.js';

export const newTask = document.querySelector('.task-input');
export const add = document.querySelector('.add');
export const list = document.querySelector('.lists');

reload.addEventListener('click', () => {
  showTasks();
});

export const completed = false; export const
  index = 1;
showTasks();

add.addEventListener('click', () => { addT(); });