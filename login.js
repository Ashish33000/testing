import navbar from "./navbar.js";
document.getElementById("nav").innerHTML=navbar()
let dispaly=document.getElementById("display")
let btn=document.getElementById("btn")
btn.onclick=()=>{
    login()
}

let login=async()=>{
    try{
        let login_data={
            username:document.getElementById("username").value,
            password:document.getElementById("password").value
        }
        let res=await fetch('https://masai-api-mocker.herokuapp.com/auth/login',{
            method:'POST',
            body:JSON.stringify(login_data),
            headers:{
                'Content-Type':'application/json'
            }
        })
        let data=await res.json()
        alert("login sucessful")
        window.location.href="admin.html"
        let {token}=data
        let {username}=login_data
       // getData(username,token)
       saveuser(username,token,60000)

        console.log('data: ', data)
        console.log("res",res);

    }catch(error){
        console.log('error: ', error);

    }
}


let saveuser=(username,token,time)=>{
    let user={
        username,
        token,
    }
    localStorage.setItem('user_details',JSON.stringify(user))
    setTimeout(()=>{
        localStorage.setItem('user_details',JSON.stringify(null))

    },time)
}