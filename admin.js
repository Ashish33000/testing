import navbar from "./navbar.js";
document.getElementById("nav").innerHTML=navbar()
let btn=document.getElementById("btn")
btn.onclick=()=>{
    addProduct()
}
let dbtn=document.getElementById("dbtn")
dbtn.onclick=()=>{
    deleteProduct()
}
let admin={
    email:"harsh_109@gmail.com",
    name:"harsh_109",
    

}

let addProduct=async()=>{
    let user_details=JSON.parse(localStorage.getItem("user_details"));
    if(!user_details){
        alert("Login in again")
        window.location.href="login.html"
    }
    let user= await getData(user_details.username,user_details.token)
    console.log('user: ', user);
    if(user.email!==admin.email){
        alert("Not Authorised")
        return
    }
   
    let prod_data={
        id:document.getElementById("id").value,
        image:document.getElementById("image").value,
        title:document.getElementById("title").value,
        description:document.getElementById("desc").value,
        price:document.getElementById("price").value,
        rating:document.getElementById("rating").value,

    }
    let res=await fetch('http://localhost:3000/posts',{
        method:'POST',
        body:JSON.stringify(prod_data),
        headers:{
            'Content-Type':'application/json'
        }
    })
    let data=await res.json()
    console.log('data: ', data);
}

// updated
let getData=async(username,token)=>{
    
    let res=await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
        headers:{
          'Content-Type':'application/json',
          Authorization: `Bearer ${token}`  
        }
    })
    let data=await res.json()
   return data
}
//delete function
let deleteProduct=async()=>{
    try{
        
         let id=document.getElementById("did").value
        
        let res=await fetch(`http://localhost:3000/posts/${id}`,{
            method:'DELETE',
          
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