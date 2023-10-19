import { renderToDo, renderAddToDo } from "./render-to-do";
import { toDoList, addToDoObject } from "./add-to-do";
import { editToDo } from "./edit-delete-todo";

const projectDialog = document.getElementById("project-addition");
const addProject = document.getElementById('add-project-button');

addProject.addEventListener('click', (e) => {
    projectDialog.showModal();
})

const addToDo = document.querySelector('.add-item-js');
const listItems = document.querySelector('.list-items');


let toDoListLength = toDoList.length;


addToDo.addEventListener('click', (e)=> {
    renderAddToDo(toDoListLength);
    const addToDoInput = document.querySelector(".add-to-do-input");
    const submitToDo = document.querySelector(".submit-button");
    const cancelToDo = document.querySelector('.cancel-button');
    const addToDoModal = document.querySelector('.add-to-do-modal');
    addToDoInput.focus();
    submitToDo.addEventListener('click', (e) => {
        addToDoObject(toDoListLength);
        listItems.innerHTML = '';
        renderToDo();
        console.log(toDoList);
    })
    cancelToDo.addEventListener('click', (e) => {
        listItems.removeChild(addToDoModal);
    })
})




renderToDo();

const editSVG = document.querySelectorAll('.edit-svg');
editSVG.forEach( (editBtn) => {
    const addToDoInput = document.querySelector(".add-to-do-input");
    editBtn.addEventListener('click', (e) => {
        console.log('Hello')
        editToDo(e);

    } )
})