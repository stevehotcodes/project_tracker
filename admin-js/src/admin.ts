const addProjectBt = document.getElementById("add-project-bt") as HTMLElement
addProjectBt.addEventListener("click", openModal)

const closeModalBt =  document.getElementById("close") as HTMLParagraphElement
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