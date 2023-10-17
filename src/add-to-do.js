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

export {toDoList};
