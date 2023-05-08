
    
    const reset =document.querySelector("#Reset") as HTMLButtonElement;
    reset.addEventListener("click",resetPassword)
    
    async function resetPassword(){
        
        const userEmailInput=(document.querySelector("#email")as HTMLInputElement).value;
        const userPassword=(document.querySelector("#Password") as HTMLInputElement).value;
         
        //fetch user and validate user details from the JSON;
        let response= await fetch("http://localhost:3000/users")
        let fetchEmail=await response.json();
       
        //let userConfirmedEmail=fetchEmail.find((element:string))
        let userConfrm  = fetchEmail.find((element:{ userEmail: string; })=>element.userEmail === userEmailInput )!
        console.log(userConfrm);
     
         if(userConfrm){
          return userConfrm
          
         }else return null
        }
         async function changePassword() {
            const userDataFromDB=resetPassword().then((value)=>{
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
            })
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
            
            }




    


   
