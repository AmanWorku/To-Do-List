import './style.css';

let newTask = document.querySelector('.task-input')
const add = document.querySelector('.add');
const list = document.querySelector('.lists');
const reload = document.querySelector('.fa-arrows-rotate');

reload.addEventListener('click' , () => {
  showTasks();
})


let taskList = JSON.parse(localStorage.getItem('data')) || [];
let completed = false, index = 1;
let listArr;

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


function showTasks(){
  let storedData = localStorage.getItem('data');
  //index = 0;
  if (storedData === null) {
    listArr = [];
  }
  else {
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
       <i class="fa-solid fa-trash delete" onclick="deleteTask(${element.index});"></i>       
</div>
       </li><hr>`;
  });
  list.innerHTML = newLiTag;
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

window.deleteTask =  (index) => {
  let storedData = localStorage.getItem('data');
  listArr = JSON.parse(storedData);
  listArr.splice(index-1,1);
  for (let i = 0 ; i < listArr.length ; i++) {
    listArr[i].index = i+1;
  }

  localStorage.setItem('data', JSON.stringify(listArr));
  showTasks();

}


//
//
// window.onload = () => {
//   if (localStorage.getItem('data')) {
//     taskList = JSON.parse(localStorage.getItem('data'));
//   }
//   for (let i = 0; i < taskList.length; i += 1) {
//     list.innerHTML += `<li>
//       <div class="left">
//       <input type="checkbox" id="item${i}">
//       <p>${taskList[i].description}</p>
//       </div>
//
//       <div class="menu-pop">
//       <i class="fa-solid fa-ellipsis-vertical more"></i>
//       <button class="btn btn${i}" id="edit${i}">Edit</button>
//       <button class="btn btn${i}" id="delete${i}">Delete</button>
//         </div>
//       </li>`
//     const more = document.querySelector('.more');
//     more.addEventListener('click', () => {
//       document.querySelector('.btn').style.display = 'flex';
//     });
//   }
//   };












































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