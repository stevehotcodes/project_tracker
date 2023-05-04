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
