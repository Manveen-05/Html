let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let input=document.querySelector("input");
btn.addEventListener("click",function(){
    //console.log("Button clicked");
    let li=document.createElement("li");
    li.textContent=input.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");

    li.appendChild(delbtn);
    ul.appendChild(li);
    input.value="";
    // let del=document.createElement("button");
    // del.textContent="Delete";
    // li.appendChild(del);
    // del.addEventListener("click",function(){
    //     li.remove();
    // });
});
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem = event.target.parentNode;
        listItem.remove();
        console.log("deleted");
        
    }
 });
