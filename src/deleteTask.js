
import {showTasks} from "./showTask.js";
export let listArr,index;

export const deleteTask = (index) => {
    let storedData = localStorage.getItem('data');
    listArr = JSON.parse(storedData);
    listArr.splice(index-1,1);
    for (let i = 0 ; i < listArr.length ; i++) {
        listArr[i].index = i+1;
    }
    localStorage.setItem('data', JSON.stringify(listArr));
    showTasks();

}

