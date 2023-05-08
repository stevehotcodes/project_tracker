let login_btn=document.querySelector("#Login")! as HTMLButtonElement;

login_btn.addEventListener("click",login);

async function validate() {

  const userInputEMail=(document.querySelector("#email") as HTMLInputElement).value;

  const userInputPassword=(document.querySelector("#Password") as HTMLInputElement).value;

  let dbFetchResponse =await fetch("http://localhost:3000/users");

  let dbResponse= await dbFetchResponse.json();

 

  // console.log(dbResponse)

  let userTryng  = dbResponse.find((element:{ userEmail: string; role:string;password:string })=>element.userEmail === userInputEMail && element.password === userInputPassword )!

    //console.log(userTryng);




     if(userTryng){

      return userTryng

     

     }else return null




}




function login(): void {

  const user = validate().then( (value) => {

    console.log(value)

    if (!value) {

      console.log('err');

      alert("user does not exist")

     

    } else if (value.role === 'admin') {

      console.log('admn');

      window.location.href ="/html/admin.html"

    } else {

      window.location.href ="/html/user.html"

      localStorage.setItem("user",JSON.stringify(value))

      console.log('user');

    }


  });

   

   

 

}















// async function loginFetch() {

//     const userInputEMail=(document.querySelector("#email") as HTMLInputElement).value;

//     const userInputPassword=(document.querySelector("#Password") as HTMLInputElement).value;

//     let dbFetchResponse =await fetch("http://localhost:3000/users");

//     let dbResponse: []= await dbFetchResponse.json();

//     // console.log(dbResponse);

//     // console.log(userInputEMail)

//     // console.log(userInputPassword)

//     console.log(dbResponse);

   

//     let userExist

//   let userTryng  = dbResponse.find((element:{ userEmail: string; role:string;password:string })=>element.userEmail === userInputEMail && element.password === userInputPassword )!

//     console.log(userTryng)





//     if(userTryng){

//       if(userTryng.role === "admin"){

//         console.log("admin");

       

//       }else{

//         console.log("user");

//       }

//     }else{

//       alert("please sgnup")

//     }

     

   

//     // dbResponse.forEach((element:any)=>{

//     //   if(element.userEmail === userInputEMail && element.password === userInputPassword){

//     //     console.log("exsts");

//     //   }

   




//     //   userExist=dbResponse.find( (element1: { userEmail: string; role:string;password:string }) =>element1.userEmail===userInputEMail && element1.password === userInputPassword)

//     //  if(userExist){

//     //    console.log(userExist);

       

//     //     if( element.role==="admin"){

//     //       console.log("check in as an admin");

//     //       // window.location.href='/html/admin.html'

//     //     }

//         // else {

//         //   console.log("check as user")

//         // }

//         // else {

//         //   //  console.log("check in as an user")

//         //    alert("check in as an user")

//         //   //  window.location.href='/html/user.html'

//         // }

       

//     //  }

//     //  else{

//     //   console.log("the user does not exist")

//     //  }

//       // if(element.userEmail===userInputEMail && element.password===userInputPassword){

//       //   console.log("user exists")

//       // }

//       // else{

//       //   console.log("user doesnt exist")

//       // }

//     }

     

   

//     )

   

   

// }

    // dbResponse.forEach((element:any)=> {

    //   if(userInputEMail === element.userEmail && userInputPassword=== element.password)

    //   {

    //     window.location.href='/html/admin.html'

    //     console.log('your are an admn')

    //   }

// //       else{

// //         console.log('no user')

// //       }

// //     });

// // }




// ///




// function logout(){

//   window.location.href='/html/login.html'

// }