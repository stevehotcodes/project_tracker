const start_btn = document.querySelector('#start')as HTMLButtonElement;
const project_task_div =document.getElementById('project_task')as HTMLDivElement;

// function showprojecttask (){
//     start_btn.style.display = 'none';
//     project_task_div.style.display = 'block';
// }
// Fetching data from json file when assigned project 
async function getProjectDetails(userAssigned: string) {
    const response = await fetch('http://localhost:3000/projects');
    const data = await response.json();
    let html = "";
    let id = 0;
    data.forEach((element: {
        id: any;
        projectName: string; userAssigned: string; 
        description: string;
}) => {
    
   if (element.userAssigned === userAssigned)   {
    id = element.id;
        let project_html = `
        <h2 class="project_name">${element.projectName} </h2>
        <div class="project">
     
         <div class="project_description"><p>${element.description}</p>
         
         </div>
        
     </div>
     `
     
     html += project_html;
   }
    });
    let htmlbt = `
    <button class="start_btn" id="start" onclick= "changeToInProgress(${id},event)">START PROJECT</button>
 `
    // html += htmlbt;
    // task_desc.innerHTML = html;

 let project_desc =document.querySelector('.project_desc')as HTMLDivElement;

 let btStartDiv = document.querySelector('.allbtn')as HTMLDivElement;
  project_desc.innerHTML = html;
    // console.log(data);
    // return data;
    btStartDiv.innerHTML = htmlbt;

}
getProjectDetails( "user1");

const task_desc =document.querySelector('.all-tasks')as HTMLDivElement;

// Fetching task
async function getTaskDetails(userAssignedd: string) {
    const response = await fetch('http://localhost:3000/tasks');
    const data = await response.json();
    console.log(data);
    let html = "";
    let userAssigned22 = "";
    data.forEach((element: {
        taskName: string; userAssigned: string; 
        description: string;
        id:number;
    
}) => {
    console.log(element);
    
   if (element.userAssigned == userAssignedd)   {
        let task_html = `
        <div class="field_group">
                       <div class="input_field">
                         <p>${element.taskName}</p>
                         <div class="icons_image">
                            <input type="checkbox" name="checkbox" id="checkbox">
                            <ion-icon size="large" name="trash-outline" onclick= "deleteTask( ${element.id})"></ion-icon>
                         </div>     
                       </div>
                    </div>`
     
        userAssigned22 = element.userAssigned;
        html += task_html;
        
   }
    });
    // return data;
    console.log(userAssigned22);
    
    let htmlbt =`<div class="allbtn1">
    <button class="alldone1" onclick = "markProjectCompleted('${userAssigned22}')">All DONE</button>
 </div>`
    html += htmlbt;
    task_desc.innerHTML = html;
}

getTaskDetails( "user1");

//add task
const task_form = document.querySelector('#task_form')as HTMLElement;
task_form.addEventListener('click', async(e) => {
    e.preventDefault();
    const taskName =(document.querySelector('.input-field1')as HTMLInputElement).value;
if (taskName ==="") {
    alert("Please enter task name");
    return;
}
    const data = {
        "taskName": taskName,
        "userAssigned": "user1",
    }
    await fetch('http://localhost:3000/tasks', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    }).then(() => {
        console.log('new task added');
       
    })
    
});



// //post project
// const project_form = document.querySelector('#project_form')as HTMLFormElement;
// project_form.addEventListener('submit', (e) => {k


// });
// delete task

async function deleteTask( id:number) {
    await fetch(`http://localhost:3000/tasks/${id}`, {
            method:'DELETE',
            headers:{
                "Content-Type": "application/json"
            }
              })
 
};
//function to mark project as in progress
function markProjectInProgress() {
    
    const data2 = {
        "progress": "In Progress",
    }
    return data2;
    }

async function changeToInProgress(id:number, e: Event) {
    
    e.preventDefault();
    const data2 = markProjectInProgress();
    await fetch(`http://localhost:3000/projects/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(data2),
        headers: { 'Content-Type': 'application/json' }
    })
}
//function to delete all tasks
async function deletealltasks(userAssignedd:string) {
    const response = await fetch('http://localhost:3000/tasks');
    const data = await response.json();
    data.forEach((element: {userAssigned:string, id: number}) => {
        if (element.userAssigned === userAssignedd) {
            console.log(element);
            deleteTask(element.id);
        }
    })
}

// function to mark project as completed
async function markProjectCompleted(userAssignedd:string) {
    const response = await fetch('http://localhost:3000/projects');
    const data = await response.json();
    let id=0;
    data.forEach((element: {userAssigned:string, id: number}) => {
        if (element.userAssigned === userAssignedd) {
            console.log(element);
            id = element.id;
        }
    })
    
    const data2 = {
        "progress": "Completed",
    }
    
    deletealltasks(userAssignedd);
    
    await fetch(`http://localhost:3000/projects/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(data2),
        headers: { 'Content-Type': 'application/json' }
    })
    
    }



//funtion to put username in the header
const user_name = document.querySelector('.user_name')as HTMLDivElement;
const user_name1 = document.querySelector('.user_name1')as HTMLDivElement;
const user_name2 = document.querySelector('.user_name2')as HTMLDivElement;
const user_name3 = document.querySelector('.user_name3')as HTMLDivElement;
const user_name4 = document.querySelector('.user_name4')as HTMLDivElement;
     async function getUserName(userAssigned: string) {
    const response = await fetch('http://localhost:3000/users');
    const data = await response.json();
    console.log(data);
    let html = "";
    data.forEach((element: {
        userName: string; userAssigned: string;
}) => {
     }
    
   )
 };

//function to mark task as completed
async function markTaskComplete(id:number) {
    await fetch(`http://localhost:3000/tasks/${id}`, {
            method:'PUT',
            headers:{
                "Content-Type": "application/json"
            }
        })


}
//all done button