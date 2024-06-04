let box=document.querySelector("input");
let btn=document.querySelector("button");
let tasks=document.querySelector(".tasks");

//To add element

btn.addEventListener("click",()=>{
    addTask(box.value)
    box.value=""
})

function addTask(text){

    if(text=="")
    {
        document.querySelector(".error").style.display="block"
        document.querySelector(".error").textContent="please enter a task first"
    }
   else{

   document.querySelector(".error").style.display="none"
   let div=document.createElement("div");
   div.classList.add("flex","space-x-6","ml-2","mb-2","rounded-2xl","bg-gray-100","p-2","div2")


   let childDiv=document.createElement("div");
   childDiv.textContent=text;
   childDiv.classList.add("w-[80%]","childDiv")

   let img1=document.createElement("img");
   img1.setAttribute("src","./images/blank_circle-removebg-preview.png")
   img1.classList.add("h-6","blank","cursor-pointer")
   


   let img2=document.createElement("img");
   img2.setAttribute("src","./images/cross-removebg-preview.png")
   img2.classList.add("h-6","cross","cursor-pointer")
   

   div.appendChild(img1)
   div.appendChild(childDiv)
   div.appendChild(img2)

   tasks.appendChild(div)

   saveData()
  }

}

// to remove or edit tasks

tasks.addEventListener("click", (e) => {

    if (e.target.classList.contains("cross")) { 
        e.target.parentNode.remove();
    }

    else if (e.target.classList.contains("blank"))  
        {
            e.target.setAttribute("src","./images/ticked-removebg-preview.png")
            e.target.classList.add("h-6","tick")
            e.target.classList.remove("blank")
            e.target.parentNode.classList.add("line-through")
            saveData()
        }
    else if(e.target.classList.contains("tick"))
        {
            e.target.setAttribute("src","./images/blank_circle-removebg-preview.png")
            e.target.classList.add("h-6","blank")
            e.target.classList.remove("tick")
            e.target.parentNode.classList.remove("line-through")
            saveData()
        }
    })

    function saveData(){
        localStorage.setItem("data",tasks.innerHTML)
    }

    function showData(){
        tasks.innerHTML=localStorage.getItem("data")
    }
    showData()

    