"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const start_btn = document.querySelector('#start');
const project_task_div = document.getElementById('project_task');
// function showprojecttask (){
//     start_btn.style.display = 'none';
//     project_task_div.style.display = 'block';
// }
// Fetching data from json file when assigned project 
function getProjectDetails(userAssigned) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:3000/projects');
        const data = yield response.json();
        let html = "";
        let id = 0;
        data.forEach((element) => {
            if (element.userAssigned === userAssigned) {
                id = element.id;
                let project_html = `
        <h2 class="project_name">${element.projectName} </h2>
        <div class="project">
     
         <div class="project_description"><p>${element.description}</p>
         
         </div>
        
     </div>
     `;
                html += project_html;
            }
        });
        let htmlbt = `
    <button class="start_btn" id="start" onclick= "changeToInProgress(${id},event)">START PROJECT</button>
 `;
        // html += htmlbt;
        // task_desc.innerHTML = html;
        let project_desc = document.querySelector('.project_desc');
        let btStartDiv = document.querySelector('.allbtn');
        project_desc.innerHTML = html;
        // console.log(data);
        // return data;
        btStartDiv.innerHTML = htmlbt;
    });
}
getProjectDetails("user1");
const task_desc = document.querySelector('.all-tasks');
// Fetching task
function getTaskDetails(userAssignedd) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:3000/tasks');
        const data = yield response.json();
        console.log(data);
        let html = "";
        let userAssigned22 = "";
        data.forEach((element) => {
            console.log(element);
            if (element.userAssigned == userAssignedd) {
                let task_html = `
        <div class="field_group">
                       <div class="input_field">
                         <p>${element.taskName}</p>
                         <div class="icons_image">
                            <input type="checkbox" name="checkbox" id="checkbox">
                            <ion-icon size="large" name="trash-outline" onclick= "deleteTask( ${element.id})"></ion-icon>
                         </div>     
                       </div>
                    </div>`;
                userAssigned22 = element.userAssigned;
                html += task_html;
            }
        });
        // return data;
        console.log(userAssigned22);
        let htmlbt = `<div class="allbtn1">
    <button class="alldone1" onclick = "markProjectCompleted('${userAssigned22}')">All DONE</button>
 </div>`;
        html += htmlbt;
        task_desc.innerHTML = html;
    });
}
getTaskDetails("user1");
//add task
const task_form = document.querySelector('#task_form');
task_form.addEventListener('click', (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    const taskName = document.querySelector('.input-field1').value;
    if (taskName === "") {
        alert("Please enter task name");
        return;
    }
    const data = {
        "taskName": taskName,
        "userAssigned": "user1",
    };
    yield fetch('http://localhost:3000/tasks', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    }).then(() => {
        console.log('new task added');
    });
}));
// //post project
// const project_form = document.querySelector('#project_form')as HTMLFormElement;
// project_form.addEventListener('submit', (e) => {k
// });
// delete task
function deleteTask(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetch(`http://localhost:3000/tasks/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        });
    });
}
;
//function to mark project as in progress
function markProjectInProgress() {
    const data2 = {
        "progress": "In Progress",
    };
    return data2;
}
function changeToInProgress(id, e) {
    return __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        const data2 = markProjectInProgress();
        yield fetch(`http://localhost:3000/projects/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(data2),
            headers: { 'Content-Type': 'application/json' }
        });
    });
}
//function to delete all tasks
function deletealltasks(userAssignedd) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:3000/tasks');
        const data = yield response.json();
        data.forEach((element) => {
            if (element.userAssigned === userAssignedd) {
                console.log(element);
                deleteTask(element.id);
            }
        });
    });
}
// function to mark project as completed
function markProjectCompleted(userAssignedd) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:3000/projects');
        const data = yield response.json();
        let id = 0;
        data.forEach((element) => {
            if (element.userAssigned === userAssignedd) {
                console.log(element);
                id = element.id;
            }
        });
        const data2 = {
            "progress": "Completed",
        };
        deletealltasks(userAssignedd);
        yield fetch(`http://localhost:3000/projects/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(data2),
            headers: { 'Content-Type': 'application/json' }
        });
    });
}
//funtion to put username in the header
const user_name = document.querySelector('.user_name');
const user_name1 = document.querySelector('.user_name1');
const user_name2 = document.querySelector('.user_name2');
const user_name3 = document.querySelector('.user_name3');
const user_name4 = document.querySelector('.user_name4');
function getUserName(userAssigned) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:3000/users');
        const data = yield response.json();
        console.log(data);
        let html = "";
        data.forEach((element) => {
        });
    });
}
;
//function to mark task as completed
function markTaskComplete(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetch(`http://localhost:3000/tasks/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            }
        });
    });
}
//all done button
