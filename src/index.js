import { renderToDo, renderAddToDo } from "./render-to-do";
import { toDoList, addToDoObject } from "./add-to-do";
import { deleteToDoDOM, editButtonDOM } from "./edit-delete-todo";
import { populateStorage, getStorage } from "./local-storage";

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
        populateStorage();
        console.log(toDoList);
        editButtonDOM();
        deleteToDoDOM();
    })
    cancelToDo.addEventListener('click', (e) => {
        listItems.removeChild(addToDoModal);
        editButtonDOM();
        deleteToDoDOM();
    })
})

window.addEventListener('load', (e) => {
    getStorage();
    renderToDo();
    editButtonDOM();
    deleteToDoDOM();
})




export {toDoListLength}