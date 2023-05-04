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
const updateProjectBt = document.getElementById("update-project-details");
const addProjectBt = document.getElementById("add-project-bt");
addProjectBt.addEventListener("click", openModal);
const closeModalBt = document.getElementById("close");
closeModalBt.addEventListener("click", closeModal);
const users = document.querySelector(".all-users");
const modalWrapper = document.querySelector(".modal-wrapper");
function openModal() {
    updateProjectBt.style.display = "none";
    modalWrapper.style["display"] = "grid";
    modalWrapper.style["placeItems"] = "center";
}
function closeModal() {
    modalWrapper.style["display"] = "none";
}
function addProject(event) {
    return __awaiter(this, void 0, void 0, function* () {
        event.preventDefault();
        console.log("addProject method");
        const projectNameValue = document.querySelector("#project-name").value;
        const userAssignedValue = document.querySelector("#user-name").value;
        const projectDescriptionValue = document.querySelector("#project-desc").value;
        const newProject = {
            projectName: projectNameValue,
            userAssigned: userAssignedValue,
            progress: "",
            description: projectDescriptionValue,
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
            let state = "";
            if (item.progress === "") {
                state = "unassigned";
            }
            else {
                state = item.progress;
            }
            html += `<div class="each-project">
       <p style="width: 7rem;">${item.projectName}</p>
       <p>${item.userAssigned}</p>
       <p>${state}</p>
       <button id="update-bt" onclick = "prePopulateProjectDetails(${item.id})">UPDATE</button>
       <ion-icon name="trash-outline" style = "color: red" onclick = "deleteProject(${item.id})"></ion-icon>
   </div>`;
        });
        const projectsRender = document.querySelector(".projects-list");
        projectsRender.innerHTML = html;
    });
}
showProjects();
const AddNewProjectBt = document.getElementById("project-details");
AddNewProjectBt.addEventListener("click", addProject);
function openUpdateModal() {
    AddNewProjectBt.style.display = "none";
    modalWrapper.style["display"] = "grid";
    modalWrapper.style["placeItems"] = "center";
}
function prePopulateProjectDetails(id) {
    return __awaiter(this, void 0, void 0, function* () {
        // event.preventDefault()
        openUpdateModal();
        console.log("prepopulate method");
        const response = yield fetch("http://localhost:3000/projects");
        const allProjects = yield response.json();
        let idUsed = 0;
        allProjects.forEach((element) => {
            if (element.id === id) {
                document.querySelector("#project-name").value =
                    element.projectName;
                document.querySelector("#user-name").value =
                    element.userAssigned;
                document.querySelector("#project-desc").value =
                    element.description;
                idUsed = id;
            }
        });
        let projectNameValue = document.querySelector("#project-name").value;
        let userAssignedValue = document.querySelector("#user-name").value;
        let projectDescriptionValue = document.querySelector("#project-desc").value;
        const newProject = {
            projectName: projectNameValue,
            userAssigned: userAssignedValue,
            progress: "",
            description: projectDescriptionValue,
        };
        yield fetch(" http://localhost:3000/projects/${idUsed}", {
            method: "PATCH",
            body: JSON.stringify(newProject),
            headers: {
                "Content-Type": "application/json",
            },
        });
    });
}
function deleteProject(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetch(`http://localhost:3000/projects/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
    });
}
//------------------------------------------------users functions----------------------------------------------
function showUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("http://localhost:3000/users");
        const allProjects = yield response.json();
        let html = ``;
        allProjects.forEach((item) => {
            html += `<div class="each-user">
     <div class="img-name">
         <img src="https://www.capitalfm.co.ke/thesauce/files/2019/05/Bey-T-1.jpg" alt="">
         <p>${item.userEmail}</p>
     </div>
     
     <ion-icon name="trash-outline" style = "color: red" onclick= "deleteUser(${item.id})"></ion-icon>
 </div>`;
        });
        const usersRender = document.querySelector(".all-users");
        usersRender.innerHTML = html;
    });
}
showUsers();
function deleteUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetch(`http://localhost:3000/users/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
    });
}
