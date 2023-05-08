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
const reset = document.querySelector("#Reset");
reset.addEventListener("click", resetPassword);
function resetPassword() {
    return __awaiter(this, void 0, void 0, function* () {
        const userEmailInput = document.querySelector("#email").value;
        const userPassword = document.querySelector("#Password").value;
        //fetch user and validate user details from the JSON;
        let response = yield fetch("http://localhost:3000/users");
        let fetchEmail = yield response.json();
        //let userConfirmedEmail=fetchEmail.find((element:string))
        let userConfrm = fetchEmail.find((element) => element.userEmail === userEmailInput);
        console.log(userConfrm);
        if (userConfrm) {
            return userConfrm;
        }
        else
            return null;
    });
}
function changePassword() {
    return __awaiter(this, void 0, void 0, function* () {
        const userDataFromDB = resetPassword().then((value) => {
            console.log(value);
            if (!value) {
                console.log('err');
                alert("user does not exist");
            }
            else if (value.role === 'admin') {
                console.log('admn');
                window.location.href = "/html/admin.html";
            }
            else {
                window.location.href = "/html/user.html";
                localStorage.setItem("user", JSON.stringify(value));
                console.log('user');
            }
        });
        // const response = await fetch('http://localhost:3000/users');
        // const data = await response.json();
        // const data2 = {
        //     "password": "Completed",
        // }
        // deletealltasks(userAssignedd);
        // await fetch(`http://localhost:3000/projects/${id}`, {
        //     method: 'PATCH',
        //     body: JSON.stringify(data2),
        //     headers: { 'Content-Type': 'application/json' }
        // })
    });
}
