const Signup_btn=document.querySelector("#Signup") as HTMLInputElement;
Signup_btn.addEventListener("click", readvalues);


async function readvalues(){
    const newUserEmail=(document.querySelector("#email") as HTMLInputElement).value;
    const newUserPassword=(document.querySelector("#Password") as HTMLInputElement).value;
    const confirmPassword= (document.querySelector("#Confirm-Password") as HTMLInputElement).value;


    if(newUserEmail == '' || newUserPassword =='' || confirmPassword == '' ){
        alert('all fields must not be empty')
    }
    
    if(newUserEmail !== '' && newUserPassword !=='' && confirmPassword !== '' ){

        if(newUserPassword !== confirmPassword){
            alert('password mismatch')
        }
        
        else{
                let newUser = {
                    "userEmail": newUserEmail,
                    "password": newUserPassword,
                    "role": "user",
                };
                await fetch('http://localhost:3000/users',{
                 method:"POST",
                 body: JSON.stringify(newUser),
                 headers: {"Content-Type": "application/json"},
                }
                );
                alert("Registration Success") ;      
                redirectToLogin();             
            }
    } 
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











function redirectToLogin(){
    
    window.location.href='/html/login.html'
}
function redirecttoSamepage(){
    
    setTimeout(function(){
        window.location.reload();
     }, 1000);
}
