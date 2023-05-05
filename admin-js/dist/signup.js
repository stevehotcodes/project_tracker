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
let signup_btn = document.getElementById("Signup");
signup_btn.addEventListener('click', () => {
    onSignup();
    console.log('cdjdn');
});
function onSignup() {
    return __awaiter(this, void 0, void 0, function* () {
        let userEmail = document.getElementById("email").value;
        let userPassword = document.querySelector("#Password").value;
        let confirmPassword = document.querySelector("#Confirm-Password").value;
        //store in the local storage
        // localStorage.setItem('uEmail',userEmail)
        // localStorage.setItem('uPassword',userPassword)
        // localStorage.setItem('cPassword',confirmPassword)
        //condition to check value
        console.log(userEmail);
        const error_msg=document.querySelector(".error-msg");
        const error_msg2=document.querySelector(".error-msg2");
        const error_msg3=document.querySelector(".error-msg3")
        if (userEmail === "" && (userPassword === "" && confirmPassword === "")) {
            alert("no value ");
             error_msg.style.display="block";
             error_msg2.style.display="block";
             
             
        }
        else {
            if (userPassword !== confirmPassword) {
                alert('password msmatch');
                error_msg3.style.display="block";
            }
            else {
                if (userPassword === confirmPassword) {
                    let newUser = {
                        "userEmail": userEmail,
                        "password": userPassword,
                        "role": "user",
                    };
                    alert("Registration success!");
                    redirecttoLogin();
                    yield fetch("http://localhost:3000/users", {
                        method: "POST",
                        body: JSON.stringify(newUser),
                        headers: {
                            "Content-Type": "application/json"
                        },
                    });
                }
                
            }

        }
        // console.log(userEmail)
    });
}
function redirecttoLogin() {
    window.location.href = "/html/login.html";
}
// //    window.open("file:///D:/project_tracker/html/login.html")
// }
// else{
//   alert("password mismatch");
// }
// const form=document.querySelector(".signup-form");
// form?.addEventListener('submit',(e)=>{
//   e.preventDefault();
//   let userEmail=(document.getElementById("email")as HTMLInputElement).value ;
//   let userPassword=(document.querySelector("#Password")as HTMLInputElement).value;
//   let confirmPassword=(document.querySelector("#Confirm-Password")as HTMLInputElement).value;
//   console.log(userEmail);
// })
// export interface User{
//   email:string;
//   password:string;
// }
