const start_btn = document.querySelector('#start')as HTMLButtonElement;
const project_task_div =document.getElementById('project_task')as HTMLDivElement;
start_btn.addEventListener('click', showprojecttask);
function showprojecttask (){
    start_btn.style.display = 'none';
    project_task_div.style.display = 'block';
}
// Fetching data from json file when assigned project 
async function getProjectDetails(userAssigned: string) {
    const response = await fetch('http://localhost:3000/projects');
    const data = await response.json();
    let html = "";
    data.forEach((element: {
        projectName: string; userAssigned: string; 
        description: string;
}) => {
   if (element.userAssigned === userAssigned)   {
        let project_html = `
        <h2 class="project_name">${element.projectName} </h2>
        <div class="project">
     
         <div class="project_description"><p>${element.description}</p>
             
         </div>
     </div>`
     let project_desc =document.querySelector('.project_desc')as HTMLDivElement;

        html += project_html;
         project_desc.innerHTML = html;
   }
    });
    // console.log(data);
    // return data;


}
getProjectDetails( "user1");

const task_desc =document.querySelector('.all-tasks')as HTMLDivElement;

// Fetching task
async function getTaskDetails(userAssignedd: string) {
    const response = await fetch('http://localhost:3000/tasks');
    const data = await response.json();
    console.log(data);
    let html = "";
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
     

        html += task_html;
        
   }
   task_desc.innerHTML = html;
    });
    // return data;
}


getTaskDetails( "user1");

//add task
const task_form = document.querySelector('#task_form')as HTMLElement;
task_form.addEventListener('click', async(e) => {
    e.preventDefault();
    const taskName =(document.querySelector('.input-field1')as HTMLInputElement).value;

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
// project_form.addEventListener('submit', (e) => {


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
