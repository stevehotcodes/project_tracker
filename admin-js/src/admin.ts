const addProjectBt = document.getElementById("add-project-bt") as HTMLElement
addProjectBt.addEventListener("click", openModal)

const closeModalBt =  document.getElementById("close") as HTMLSpanElement
closeModalBt.addEventListener("click", closeModal)

const users = document.querySelector(".all-users") as HTMLDivElement


const modalWrapper = document.querySelector(".modal-wrapper") as HTMLDivElement
function openModal() {
    
    modalWrapper.style["display"] = "grid"
    modalWrapper.style["placeItems"] = "center"
}

function closeModal() {
    modalWrapper.style["display"] ="none"
}

async function addProject(event:Event) {
    event.preventDefault();

    const projectNameValue = (document.querySelector("#project-name") as HTMLInputElement).value;
    const userAssignedValue = (document.querySelector("#user-name") as HTMLInputElement).value;
    const projectDescriptionValue = (document.querySelector("#project-desc") as HTMLInputElement).value;
    const newProject: {} = {"projectName": projectNameValue,
    "userAssigned": userAssignedValue,
    "progress": "",
    "description":projectDescriptionValue,
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
    allProjects.forEach((item: { projectName: string, userAssigned: string, progress:string}) => {
      
       html+= `<div class="each-project">
       <p>${item.projectName}</p>
       <p>${item.userAssigned}</p>
       <p>${item.progress}</p>
       <button id="update-bt">UPDATE</button>
       <ion-icon name="trash-outline" style = "color: red"></ion-icon>
   </div>`;
      
    });
    const projectsRender = document.querySelector(".projects-list") as HTMLDivElement;

    projectsRender.innerHTML = html;
  }

  showProjects()
const AddNewProjectBt = document.getElementById("project-details") as HTMLButtonElement
AddNewProjectBt.addEventListener("click",addProject)
