class ToDoItem {
    constructor (listItem, date, dataIndex) {
        this.listItem = listItem;
        this.date = date;
        this.dataIndex = dataIndex;
    }
}

let exampleToDo1 = new ToDoItem('Example To-Do', '2023-10-14', '0')
let exampleToDo2 = new ToDoItem('Example To-Do 2', '2023-10-15', '1')

const toDoList = [exampleToDo1, exampleToDo2];

const addToDoObject = function(dataIndex) {
    const inputField = document.querySelector(`.add-to-do-input[data-index="${dataIndex}"]`);
    const dateField = document.querySelector(`.add-to-do-date[data-index="${dataIndex}"]`);
    let toDoItem = inputField.value;
    let toDoDate = dateField.value;
    let toDoDataIndex = toDoList.length;
    let newToDo = new ToDoItem(toDoItem, toDoDate, toDoDataIndex);
    toDoList.push(newToDo );
}

const editToDoObject = function(dataIndexNum) {
    const inputField = document.querySelector(`.add-to-do-input[data-index="${dataIndexNum}"]`);
    const dateField = document.querySelector(`.add-to-do-date[data-index="${dataIndexNum}"]`);
    toDoList[dataIndexNum].listItem = inputField.value;
    toDoList[dataIndexNum].date = dateField.value;
    toDoList[dataIndexNum].dataIndex = `${dataIndexNum}`;


}

export {toDoList, addToDoObject, editToDoObject};
