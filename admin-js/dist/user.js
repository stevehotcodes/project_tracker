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
start_btn.addEventListener('click', showprojecttask);
function showprojecttask() {
    start_btn.style.display = 'none';
    project_task_div.style.display = 'block';
}
// Fetching data from json file when assigned project 
function getProjectDetails(userAssigned) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:3000/projects');
        const data = yield response.json();
        let html = "";
        data.forEach((element) => {
            if (element.userAssigned === userAssigned) {
                let project_html = `
        <h2 class="project_name">${element.projectName} </h2>
        <div class="project">
     
         <div class="project_description"><p>${element.description}</p>
             
         </div>
     </div>`;
                let project_desc = document.querySelector('.project_desc');
                html += project_html;
                project_desc.innerHTML = html;
            }
        });
        // console.log(data);
        // return data;
    });
}
getProjectDetails("user1");
