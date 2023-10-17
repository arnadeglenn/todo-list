import { renderToDo, renderAddToDo } from "./render-to-do";

const projectDialog = document.getElementById("project-addition");
const addProject = document.getElementById('add-project-button');

addProject.addEventListener('click', (e) => {
    projectDialog.showModal();
})

const addToDo = document.querySelector('.add-item-js');

addToDo.addEventListener('click', (e)=> {
    projectDialog.showModal();
})

renderToDo();
renderAddToDo();