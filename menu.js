import navbar from "./navbar.js";
document.getElementById("nav").innerHTML=navbar()
let data;
let cont=document.getElementById("container")
let result

let getData=async(page_no)=>{
    try{
        let res=await fetch(`http://localhost:3000/posts?_page=${page_no}&_limit=4`)
         data= await res.json()
         result=data.length
        console.log('data: ', data);

      
        appendData(data)

    }catch(error){
        console.log('error: ', error);
        
    }
}
 getData(1)

let appendData=(data)=>{
    cont.innerHTML=null
    data.forEach(({image,title,price,rating,description})=> {
        let div=document.createElement("div")
        let img=document.createElement("img")
        img.src=image
        let p1=document.createElement("h1")
        p1.innerText=title
        let des=document.createElement("h1")
        des.innerText="Description"+description
        let p2=document.createElement("p")
        p2.innerText="Price"+price
        let p3=document.createElement("p")
        p3.innerText="Rating"+rating
        let btn=document.createElement("button")
        btn.innerText="Order Online"
        btn.style.backgroundColor="green"
        btn.style.color="white"
        btn.style.padding="10px 20px"

        div.append(img,p1,des,p2,p3,btn)
        cont.append(div)
       

        
    });
}


const showbutton=(result,perpage)=>{
    let btn_div=document.getElementById("btns")
    
    let buttons=Math.ceil(result/perpage)
    for(let i=1;i<=buttons;i++){
        let button=document.createElement("button")
        button.innerText=i
        button.onclick=()=>{
            getData(i)
        }
        btn_div.append(button)
    }
}
showbutton(20,4)

