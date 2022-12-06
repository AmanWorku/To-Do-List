import './style.css';

const todoLists = [
  {
    description: 'Wash the dishes',
    completed: false,
    index: 1,
  },
  {
    description: 'Complete To Do List Project',
    completed: false,
    index: 2,
  },
  {
    description: 'Join standup team meeting',
    completed: false,
    index: 3,
  },
];

todoLists.sort((a, b) => a.index - b.index);

const listContainer = document.querySelector('.lists');

listContainer.innerHTML = '';

for (let i = 0; i < todoLists.length; i += 1) {
  listContainer.innerHTML += `<li><button class="toggle"></button><p>${todoLists[i].description}</p></li>`;
}
