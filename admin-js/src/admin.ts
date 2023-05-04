const updateProjectBt = document.getElementById("update-project-details") as HTMLButtonElement;

const addProjectBt = document.getElementById("add-project-bt") as HTMLElement;
addProjectBt.addEventListener("click", openModal);

const closeModalBt = document.getElementById("close") as HTMLSpanElement;
closeModalBt.addEventListener("click", closeModal);

const users = document.querySelector(".all-users") as HTMLDivElement;

const modalWrapper = document.querySelector(".modal-wrapper") as HTMLDivElement;
function openModal() {
  updateProjectBt.style.display = "none";
  modalWrapper.style["display"] = "grid";
  modalWrapper.style["placeItems"] = "center";
}

function closeModal() {
  modalWrapper.style["display"] = "none";
}

async function addProject(event: Event) {
  event.preventDefault();
  console.log("addProject method");
  const projectNameValue = (
    document.querySelector("#project-name") as HTMLInputElement
  ).value;
  const userAssignedValue = (
    document.querySelector("#user-name") as HTMLInputElement
  ).value;
  const projectDescriptionValue = (
    document.querySelector("#project-desc") as HTMLInputElement
  ).value;
  const newProject: {} = {
    projectName: projectNameValue,
    userAssigned: userAssignedValue,
    progress: "",
    description: projectDescriptionValue,
  };

  await fetch(" http://localhost:3000/projects", {
    method: "POST",
    body: JSON.stringify(newProject),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

async function showProjects() {
  const response = await fetch("http://localhost:3000/projects");
  const allProjects = await response.json();

  let html = ``;
  allProjects.forEach(
    (item: {
      projectName: string;
      userAssigned: string;
      progress: string;
      id: number;
    }) => {
      let state = "";
      if (item.progress === "") {
        state = "unassigned";
      } else {
        state = item.progress;
      }
      html += `<div class="each-project">
       <p style="width: 7rem;">${item.projectName}</p>
       <p>${item.userAssigned}</p>
       <p>${state}</p>
       <button id="update-bt" onclick = "prePopulateProjectDetails(${item.id})">UPDATE</button>
       <ion-icon name="trash-outline" style = "color: red" onclick = "deleteProject(${item.id})"></ion-icon>
   </div>`;
    }
  );
  const projectsRender = document.querySelector(
    ".projects-list"
  ) as HTMLDivElement;

  projectsRender.innerHTML = html;
}

showProjects();
const AddNewProjectBt = document.getElementById(
  "project-details"
) as HTMLButtonElement;

AddNewProjectBt.addEventListener("click", addProject);

function openUpdateModal() {
  AddNewProjectBt.style.display = "none";
  modalWrapper.style["display"] = "grid";
  modalWrapper.style["placeItems"] = "center";
}

async function prePopulateProjectDetails(id: number) {
  // event.preventDefault()
  openUpdateModal();

  console.log("prepopulate method");

  const response = await fetch("http://localhost:3000/projects");
  const allProjects = await response.json();
  let idUsed = 0;
  allProjects.forEach(
    (element: {
      id: number;
      projectName: string;
      userAssigned: string;
      description: string;
    }) => {
      if (element.id === id) {
        (document.querySelector("#project-name") as HTMLInputElement).value =
          element.projectName;
        (document.querySelector("#user-name") as HTMLInputElement).value =
          element.userAssigned;
        (document.querySelector("#project-desc") as HTMLInputElement).value =
          element.description;

        idUsed = id;
      }
    }
  );

  let projectNameValue = (
    document.querySelector("#project-name") as HTMLInputElement
  ).value;
  let userAssignedValue = (
    document.querySelector("#user-name") as HTMLInputElement
  ).value;
  let projectDescriptionValue = (
    document.querySelector("#project-desc") as HTMLInputElement
  ).value;
  const newProject: {} = {
    projectName: projectNameValue,
    userAssigned: userAssignedValue,
    progress: "",
    description: projectDescriptionValue,
  };

  await fetch(" http://localhost:3000/projects/${idUsed}", {
    method: "PATCH",
    body: JSON.stringify(newProject),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

async function deleteProject(id: number) {
  await fetch(`http://localhost:3000/projects/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

//------------------------------------------------users functions----------------------------------------------

async function showUsers() {
  const response = await fetch("http://localhost:3000/users");
  const allProjects = await response.json();

  let html = ``;
  allProjects.forEach((item: { userEmail: string; id: number }) => {
    html += `<div class="each-user">
     <div class="img-name">
         <img src="https://www.capitalfm.co.ke/thesauce/files/2019/05/Bey-T-1.jpg" alt="">
         <p>${item.userEmail}</p>
     </div>
     
     <ion-icon name="trash-outline" style = "color: red" onclick= "deleteUser(${item.id})"></ion-icon>
 </div>`;
  });
  const usersRender = document.querySelector(".all-users") as HTMLDivElement;

  usersRender.innerHTML = html;
}

showUsers();
async function deleteUser(id: number) {
  await fetch(`http://localhost:3000/users/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
