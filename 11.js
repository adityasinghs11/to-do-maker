const input = document.getElementById('inp');
const addBtn = document.querySelector('button[onclick="Add()"]');
const editBtn = document.querySelector('button[onclick="Edit()"]');
const text = document.querySelector('.text');

let tasks = [];

function Add() {
  if (input.value.trim() !== '') {
    tasks.push(input.value);
    input.value = '';
    Render();
  }
}

function Edit() {
  if (tasks.length > 0) {
    const task = tasks.pop();
    input.value = task;
    Render();
  }
}

function Render() {
  text.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${task}</span>
      <button class="edit" onclick="Edit()"><i class="fas fa-pen"></i></button>
      <button class="delete" onclick="Delete(${index})"><i class="fas fa-trash"></i></button>`;
    text.appendChild(li);
  });
}

function Delete(index) {
  tasks.splice(index, 1);
  Render();
}

addBtn.addEventListener('click', Add);
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    Add();
  }
});

Render();