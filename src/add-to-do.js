class ToDoItem {
    constructor (listItem, date, dataIndex) {
        this.listItem = listItem;
        this.date = date;
        this.dataIndex = dataIndex;
    }
}

let exampleToDo1 = new ToDoItem('Example Item', '2023-10-14', '0')
let exampleToDo2 = new ToDoItem('Example Item', '2023-10-15', '1')

const toDoList = [];

const fullToDoList = document.querySelector('.list-items');

const renderToDo = function() {
    
    for (let i=0; i<toDoList.length; i++) {
        const listItem = document.createElement('div');
        listItem.classList.add('list-item');
        listItem.setAttribute('data-index', `${i}`);
        fullToDoList.appendChild(listItem);

        const checkbox = document.createElement('div');
        checkbox.classList.add('checkbox');
        listItem.appendChild(checkbox);

        const inputField = document.createElement('input');
        inputField.classList.add('to-do-input');
        inputField.setAttribute('type', 'text');
        inputField.setAttribute('placeholder', 'Example Item');
        inputField.setAttribute('data-index', `${i}`);
        inputField.value = toDoList[i].listItem;
        listItem.appendChild(inputField);

        const iconBox = document.createElement('div');
        iconBox.classList.add('icon-box');
        listItem.appendChild(iconBox);

        const dateInput = document.createElement('input');
        dateInput.classList.add('date-input');
        dateInput.setAttribute('type', 'date');
        dateInput.setAttribute('data-index', `${i}`);
        dateInput.value = toDoList[i].date;
        iconBox.appendChild(dateInput);

        const svgEdit = document.createElement('svg');
        svgEdit.classList.add('edit-svg');
        svgEdit.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        svgEdit.setAttribute('viewBox', '0 0 24 24');
        const svgEditTitle = document.createElement('title');
        svgEditTitle.innerHTML = 'pencil';
        svgEdit.appendChild(svgEditTitle);
        const svgEditPath = document.createElement('path');
        svgEdit.setAttribute('d', 'M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z');
        svgEdit.appendChild(svgEditPath);
        iconBox.appendChild(svgEdit);

        const svgDelete = document.createElement('svg');
        svgDelete.classList.add('delete-svg');
        svgDelete.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        svgDelete.setAttribute('viewBox', '0 0 24 24');
        const svgDeleteTitle = document.createElement('title');
        svgDeleteTitle.innerHTML = 'trash-can-outline';
        svgDelete.appendChild(svgDeleteTitle);
        const svgDeletePath = document.createElement('path');
        svgDelete.setAttribute('d', 'M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z');
        svgDelete.appendChild(svgDeletePath);
        iconBox.appendChild(svgDelete);


    }
    
}


