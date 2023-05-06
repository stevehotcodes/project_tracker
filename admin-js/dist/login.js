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
const login_btn = document.querySelector("#Login-user");
login_btn.addEventListener("click", loginFetch);
function loginFetch() {
    return __awaiter(this, void 0, void 0, function* () {
        const userInputEMail = document.querySelector("#email");
        const userInputPassword = document.querySelector("Password");
        let dbFetchResponse = yield fetch("http://localhost:3000/users");
        let dbResponse = yield dbFetchResponse.json();
        console.log(dbResponse);
        dbResponse.forEach((element) => {
            console.log("you are signed in as admin");
            //   if(userInputEMail===element.userEmail && element.role==="admin") {
            //    if(userInputPassword===element.password){
            //     console.log("you are signed in as admin");
            //     //redirect to the admin dashboard
            //   }
            // }
            //     else if((userInputEMail===element.userEmail && element.role==="user")&& (userInputPassword===element.password)){
            //         console.log("you are signed in as user");
            //  /
        });
    });
}
loginFetch();
