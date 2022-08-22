import navbar from "./navbar.js";
document.getElementById("nav").innerHTML=navbar()
let btn=document.getElementById("btn")
btn.onclick=()=>{
    regData()
}

async function regData(){
    try{
        let register_data={
            name:document.getElementById("name").value,
            email:document.getElementById("email").value,
            password:document.getElementById("password").value,
            username:document.getElementById("username").value,
            mobile:document.getElementById("mobile").value,
            description:document.getElementById("desc").value,
        }
        let res=await fetch('https://masai-api-mocker.herokuapp.com/auth/register',{
            method:'POST',
            body:JSON.stringify(register_data),
            headers:{
                'Content-Type':'application/json'
            }
            
        })
        let data=await res.json()
        console.log('data: ', data);

    }catch(error){
        console.log('error: ', error);

    }
}