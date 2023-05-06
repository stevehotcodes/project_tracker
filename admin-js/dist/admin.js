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
const AddNewProjectBt = document.getElementById("project-details");
const users = document.querySelector(".all-users");
const modalWrapper = document.querySelector(".modal-wrapper");
function openModal() {
    document.querySelector("#project-name").value = "";
    document.querySelector("#user-name").value =
        "";
    document.querySelector("#project-desc").value =
        "";
    AddNewProjectBt.style.display = "block";
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
        // console.log("addProject method");
        const projectNameValue = document.querySelector("#project-name").value;
        const userAssignedValue = document.querySelector("#user-name").value;
        const projectDescriptionValue = document.querySelector("#project-desc").value;
        if (projectNameValue === "" || projectDescriptionValue === "") {
            alert("please fill all values");
            return;
        }
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
        console.log(allProjects);
        let html = ``;
        if (allProjects.length === 0) {
            html = `<h3> No Projects </h3>`;
        }
        allProjects.forEach((item) => {
            let state = "";
            if (item.progress === "") {
                state = "not started";
            }
            else {
                state = item.progress;
            }
            html += `<div class="each-project">
       <p style="width: 7rem;">${item.projectName}</p>
       <p>${item.userAssigned}</p>
       <p>${state}</p>
       <button id="update-bt" onclick = "prePopulateProjectDetails(${item.id}, event)">UPDATE</button>
       <ion-icon name="trash-outline" style = "color: red" onclick = "deleteProject(${item.id})"></ion-icon>
   </div>`;
        });
        const projectsRender = document.querySelector(".projects-list");
        projectsRender.innerHTML = html;
    });
}
showProjects();
AddNewProjectBt.addEventListener("click", addProject);
function openUpdateModal() {
    AddNewProjectBt.style.display = "none";
    modalWrapper.style["display"] = "grid";
    modalWrapper.style["placeItems"] = "center";
    updateProjectBt.style.display = "block";
}
function prePopulateProjectDetails(id, e) {
    return __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        openUpdateModal();
        document.querySelector("#project-id").value = id.toString(); //hidden input field to pass the id to update method :)
        // console.log("prepopulate method");
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
    });
}
function updateProject() {
    return __awaiter(this, void 0, void 0, function* () {
        let projectNameValue = document.querySelector("#project-name").value;
        let userAssignedValue = document.querySelector("#user-name").value;
        let projectDescriptionValue = document.querySelector("#project-desc").value;
        let projectID = document.querySelector("#project-id").value;
        //console.log(projectID);
        if (projectNameValue === "" || projectDescriptionValue === "") {
            alert("please fill all values");
            return;
        }
        const newProject = {
            projectName: projectNameValue,
            userAssigned: userAssignedValue,
            progress: "",
            description: projectDescriptionValue,
        };
        yield fetch(` http://localhost:3000/projects/${projectID}`, {
            method: "PATCH",
            body: JSON.stringify(newProject),
            headers: {
                "Content-Type": "application/json",
            },
        });
    });
}
// let projectID = (
//   document.querySelector("#project-id") as HTMLInputElement
// ).value;
updateProjectBt.addEventListener("click", updateProject);
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
function showUsersSelectionOptions() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("http://localhost:3000/users");
        const allUsers = yield response.json();
        let html = ``;
        if (allUsers.length === 0) {
            html = `<h3> No Users </h3>`;
        }
        allUsers.forEach((item) => {
            html += `<option value = "${item.userEmail}">${item.userEmail}</option>`;
        });
        const userSelection = document.getElementById("user-name");
        userSelection.innerHTML = html;
    });
}
showUsersSelectionOptions();
//------------------------------------------------users functions----------------------------------------------
function showUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("http://localhost:3000/users");
        const allUsers = yield response.json();
        let html = ``;
        if (allUsers.length === 0) {
            html = `<h3> No Users </h3>`;
        }
        allUsers.forEach((item) => {
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
