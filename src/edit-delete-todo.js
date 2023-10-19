import { toDoList } from "./add-to-do";
import { renderToDo, renderAddToDo } from "./render-to-do";

const listItems = document.querySelector('.list-items');

const editToDo = function(event) {
    if (event.target.classList.contains('edit-svg')) {
        const svgBtn = event.target;
        const listNumber = svgBtn.getAttribute('data-index');
        console.log(listNumber);
        const listItem = document.querySelector(`.full-to-do[data-index="${listNumber}"]`);
        console.log(listItem)
        listItems.removeChild(listItem);
    }
}

export {editToDo};