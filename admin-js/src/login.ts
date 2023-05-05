const login_btn=document.querySelector("#Login-user") as HTMLInputElement;
login_btn.addEventListener("click", loginFetch)
async function loginFetch() {
    const userInputEMail=document.querySelector("#email") as HTMLInputElement;
    const userInputPassword=document.querySelector("Password") as HTMLInputElement;
    let dbFetchResponse =await fetch("http://localhost:3000/users");
    let dbResponse= await dbFetchResponse.json();
    console.log(dbResponse);
    dbResponse.forEach((element:any)=>{
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

    }
        
)

}
loginFetch();