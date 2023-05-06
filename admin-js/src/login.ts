const login_btn=document.querySelector("#Login-user") as HTMLInputElement;
login_btn.addEventListener("click", loginFetch)
async function loginFetch() {
    const userInputEMail=(document.querySelector("#email") as HTMLInputElement).value;
    const userInputPassword=(document.querySelector("#Password") as HTMLInputElement).value;
    let dbFetchResponse =await fetch("http://localhost:3000/users");
    let dbResponse= await dbFetchResponse.json();
    // console.log(dbResponse);
    // console.log(userInputEMail)
    // console.log(userInputPassword)
    let userExist
    dbResponse.forEach((element:any)=>{
      userExist=dbResponse.find( (element: { userEmail: string; }) =>element.userEmail===userInputEMail)
     if(userExist){
        if(userInputPassword==="password" && element.role==="admin"){
          alert("check in as an admin");
          window.location.href='/html/admin.html'
        }
        else if(userInputPassword===element.userInputPassword && element.role==="user"){
           alert("you are not an admin")
           location.reload();
        }


          
        
     }
     else{
      console.log("the user does not exist")
     }
      // if(element.userEmail===userInputEMail && element.password===userInputPassword){
      //   console.log("user exists")
      // }
      // else{
      //   console.log("user doesnt exist")
      // }
    }
     
    
    )
    
   
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

function logout(){
  window.location.href='/html/login.html'
}