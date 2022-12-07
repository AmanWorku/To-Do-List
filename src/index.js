import './style.css';

let newTask = document.querySelector('.task-input')
const add = document.querySelector('.add');
const list = document.querySelector('.lists');


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

window.editTask = function (index){
  console.log("wihiiii");
}

//delete task function

window.deleteTask = function (index){
  let storedData = localStorage.getItem('data');
  listArr = JSON.parse(storedData);
  listArr.splice(index-1,1);
  for (let i = index+1 ; i < listArr.length ; i++) {
    listArr[i+1].index = i+1;
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
       <p class="taks${element.index}">${element.description}</p>
       </div>
       <div class="right">
       <button class="edit" onclick="editTask(${element.index});">Edit</button>
       <button class="delete" onclick="deleteTask(${element.index});">Delete</button>       
</div>
       </li>`;
  });
  list.innerHTML = newLiTag;
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