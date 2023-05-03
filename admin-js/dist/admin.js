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
const addProjectBt = document.getElementById("add-project-bt");
addProjectBt.addEventListener("click", openModal);
const closeModalBt = document.getElementById("close");
closeModalBt.addEventListener("click", closeModal);
const users = document.querySelector(".all-users");
const modalWrapper = document.querySelector(".modal-wrapper");
function openModal() {
    modalWrapper.style["display"] = "grid";
    modalWrapper.style["placeItems"] = "center";
}
function closeModal() {
    modalWrapper.style["display"] = "none";
}
function addProject(event) {
    return __awaiter(this, void 0, void 0, function* () {
        event.preventDefault();
        const projectNameValue = document.querySelector("#project-name").value;
        const userAssignedValue = document.querySelector("#user-name").value;
        const projectDescriptionValue = document.querySelector("#project-desc").value;
        const newProject = { "projectName": projectNameValue,
            "userAssigned": userAssignedValue,
            "progress": "",
            "description": projectDescriptionValue,
        };
        yield fetch(" http://localhost:3000/projects", {
            method: "POST",
            body: JSON.stringify(newProject),
            headers: {
                "Content-Type": "application/json",
            },
        });
    });
}
function showProjects() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("http://localhost:3000/projects");
        const allProjects = yield response.json();
        let html = ``;
        allProjects.forEach((item) => {
            html += `<div class="each-project">
       <p>${item.projectName}</p>
       <p>${item.userAssigned}</p>
       <p>${item.progress}</p>
       <button id="update-bt">UPDATE</button>
       <ion-icon name="trash-outline" style = "color: red"></ion-icon>
   </div>`;
        });
        const projectsRender = document.querySelector(".projects-list");
        projectsRender.innerHTML = html;
    });
}
showProjects();
const AddNewProjectBt = document.getElementById("project-details");
AddNewProjectBt.addEventListener("click", addProject);
