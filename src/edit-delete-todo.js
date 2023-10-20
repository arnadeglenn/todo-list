import { renderToDo, renderAddToDo, editToDoItem } from "./render-to-do";
import { addToDoObject, toDoList, editToDoObject } from "./add-to-do";
import { toDoListLength } from ".";

const listItems = document.querySelector('.list-items');

const editToDo = function(event) {
    if (event.target.classList.contains('edit-svg')) {
        const svgBtn = event.target;
        const listNumber = svgBtn.getAttribute('data-index');
        const listItem = document.querySelector(`.full-to-do[data-index="${listNumber}"]`);
        const editModule = document.createElement('div');
        listItems.replaceChild(editModule, listItem);
        editToDoItem(editModule, listNumber);
        console.log(toDoList)
    }
}

const editButtonDOM = function () {
    const editSVG = document.querySelectorAll('.edit-svg');
    editSVG.forEach( (editBtn) => {
    editBtn.addEventListener('click', (e) => {
        console.log('Hello')
        editToDo(e);
        console.log('Hello Again')
        const submitToDo = document.querySelector(".submit-button");
        const cancelToDo = document.querySelector('.cancel-button');
        const addToDoModal = document.querySelector('.add-to-do-modal');
        const listNumber = addToDoModal.getAttribute('data-index');
        submitToDo.addEventListener('click', (e) => {
            editToDoObject(listNumber);
            listItems.innerHTML = '';
            renderToDo();
            console.log(toDoList);
            editButtonDOM();
            deleteToDoDOM();
        })
        cancelToDo.addEventListener('click', (e) => {
            listItems.innerHTML = '';
            renderToDo();
            console.log(toDoList);
            editButtonDOM();
            deleteToDoDOM();
        })
    } )
})
}

const deleteToDo = function(event) {
    if (event.target.classList.contains('delete-svg')) {
        const svgBtn = event.target;
        const listNumber = svgBtn.getAttribute('data-index');
        const listItem = document.querySelector(`.full-to-do[data-index="${listNumber}"]`);
        console.log(listNumber);
        toDoList.splice(listNumber, 1);
    }
}

const deleteToDoDOM = function() {
    const deleteSVG = document.querySelectorAll('.delete-svg');
    deleteSVG.forEach( (deleteBtn) => {
        deleteBtn.addEventListener('click', (e) => {
            deleteToDo(e);
            listItems.innerHTML = '';
            renderToDo();
            editButtonDOM();
            deleteToDoDOM();
        })
    })
}

export {editToDo, editButtonDOM, deleteToDoDOM};