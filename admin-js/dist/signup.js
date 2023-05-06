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
const Signup_btn = document.querySelector("#Signup");
Signup_btn.addEventListener("click", readvalues);
function readvalues() {
    return __awaiter(this, void 0, void 0, function* () {
        const newUserEmail = document.querySelector("#email").value;
        const newUserPassword = document.querySelector("#Password").value;
        const confirmPassword = document.querySelector("#Confirm-Password").value;
        if (newUserEmail == '' || newUserPassword == '' || confirmPassword == '') {
            alert('all fields must not be empty');
        }
        if (newUserEmail !== '' && newUserPassword !== '' && confirmPassword !== '') {
            if (newUserPassword !== confirmPassword) {
                alert('password mismatch');
            }
            else {
                let newUser = {
                    "userEmail": newUserEmail,
                    "password": newUserPassword,
                    "role": "user",
                };
                yield fetch('http://localhost:3000/users', {
                    method: "POST",
                    body: JSON.stringify(newUser),
                    headers: { "Content-Type": "application/json" },
                });
                alert("Registration Success");
                redirectToLogin();
            }
        }
    });
}
// async  function  onSignup(){
//     let dbFetchResponseOnSignup =await fetch("http://localhost:3000/users");
//     let userDetailsFromDb= await dbFetchResponseOnSignup.json();   
//     userDetailsFromDb.forEach((element:any)=> {
//     let newUserExist=userDetailsFromDb.find( (element: { userEmail: string;}) =>element.userEmail===newUserEmail )
//     if(newUserExist){
//     alert("Already registered")
//     location.href="/html/login.html"
//     // console.log()
//     //  redirectToLogin()
//      }})
// }
// async  function  onSignup(){
//     let dbFetchResponseOnSignup =await fetch("http://localhost:3000/users");
//     let userDetailsFromDb= await dbFetchResponseOnSignup.json();
//     const newUserEmail=(document.querySelector("#email") as HTMLInputElement).value;
//     const newUserPassword=(document.querySelector("#Password") as HTMLInputElement).value;
//     const confirmPassword= (document.querySelector("#Confirm-Password") as HTMLInputElement).value;
//     userDetailsFromDb.forEach((element:any) => {
//         let newUserExist=userDetailsFromDb.find( (element: { userEmail: string;}) =>element.userEmail===newUserEmail )
//         if(newUserExist){
//             // alert("Already registered")
//             // location.href="/html/login.html"
//             // console.log()
//              redirectToLogin()
//         }
//         else{
//             alert('cannot regster empty feld')
//         }
//         // else{
//         //     if (newUserEmail === "" && (newUserPassword === "" && confirmPassword === "")) {
//         //         alert("no value ");
//         //         //  error_msg.style.display="block";
//         //         //  error_msg2.style.display="block";
//         //         //  redirecttoSamepage()
//         //     }
//         //     else {
//         //         if (newUserPassword !== confirmPassword) {
//         //             alert('password mismatch');
//         //             // error_msg3.style.display="block";
//         //           redirecttoSamepage()
//         //         }
//         //         else {
//         //         //     if ((newUserPassword === confirmPassword) && newUserEmail!==" ") {
//         //         //         //reg user
//         //         //         let newUser = {
//         //         //             "userEmail": newUserEmail,
//         //         //             "password": newUserPassword,
//         //         //             "role": "user",
//         //         //         }
//         //         //         await fetch("http://localhost:3000/users", {
//         //         //         method: "POST",
//         //         //         body: JSON.stringify(newUser),
//         //         //         headers: {
//         //         //             "Content-Type": "application/json"
//         //         //         },
//         //         //     });
//         //         // }
//         //         // else{
//         //         //     redirecttoSamepage() 
//         //         // }  
//         //       }
//         //       }
//         //   }
//         });
// // onSignup()
function redirectToLogin() {
    window.location.href = '/html/login.html';
}
function redirecttoSamepage() {
    setTimeout(function () {
        window.location.reload();
    }, 1000);
}
