import { toDoList } from "./add-to-do"

const populateStorage = function() {
    localStorage.setItem("toDoListArr", JSON.stringify(toDoList));
}



const getStorage = function() {
    const isLocalStorageAvailable = typeof localStorage !== 'undefined';
    
    if (isLocalStorageAvailable) {
        try {
            const storedData = localStorage.getItem("toDoListArr");
            if (storedData !== null) {
                toDoList = JSON.parse(storedData)
            }
        } catch (error) {
        toDoList = JSON.parse(localStorage.getItem("toDoListArr"));
    }
}
}

export {populateStorage, getStorage};