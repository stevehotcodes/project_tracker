"use strict";
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
