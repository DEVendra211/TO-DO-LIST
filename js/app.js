
//  let current_task=document.querySelectorAll(".delete")
document.querySelector("#push").addEventListener("click",function(){

   
    
    let input=document.querySelector(".write").value;

    if(input == ""){
        alert("please enter the task");
    }
    else{
        document.querySelector(".write").value="";

        document.querySelector(".tasks").innerHTML+=` <div class="task"> <span class="task_name">${input} </span> <button class="delete"><span class="fa fa-trash-o"> </span></button> </div>`;

        document.querySelectorAll(".delete").forEach(i=>{

            i.addEventListener("click",function () {
                i.parentElement.remove()
            });
        })
        document.querySelectorAll(".task_name").forEach(i=>{

            i.addEventListener("click",function () {
                i.classList.toggle("complete")
            });
        })

        



    }
    
})

    



   
  
