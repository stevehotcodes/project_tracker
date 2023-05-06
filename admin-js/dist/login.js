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
let login_btn = document.querySelector("#Login");
login_btn.addEventListener("click", loginFetch);
function loginFetch() {
    return __awaiter(this, void 0, void 0, function* () {
        const userInputEMail = document.querySelector("#email").value;
        const userInputPassword = document.querySelector("#Password").value;
        let dbFetchResponse = yield fetch("http://localhost:3000/users");
        let dbResponse = yield dbFetchResponse.json();
        // console.log(dbResponse);
        // console.log(userInputEMail)
        // console.log(userInputPassword)
        let userExist;
        dbResponse.forEach((element) => {
            userExist = dbResponse.find((element) => element.userEmail === userInputEMail);
            if (userExist) {
                if (userInputPassword === "password" && element.role === "admin") {
                    alert("check in as an admin");
                    window.location.href = '/html/admin.html';
                }
                else if (userInputPassword === element.userInputPassword && element.role === "user") {
                    alert("you are not an admin");
                    location.reload();
                }
            }
            else {
                console.log("the user does not exist");
            }
            // if(element.userEmail===userInputEMail && element.password===userInputPassword){
            //   console.log("user exists")
            // }
            // else{
            //   console.log("user doesnt exist")
            // }
        });
    });
}
//     dbResponse.forEach((element:any)=> {
//       if(userInputEMail === element.userEmail && userInputPassword=== element.password)
//       {
//         window.location.href='/html/admin.html'
//         console.log('your are an admn')
//       }
//       else{
//         console.log('no user')
//       }
//     });
// }
///
function logout() {
    window.location.href = '/html/login.html';
}
