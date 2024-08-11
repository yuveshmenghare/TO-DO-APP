//TO-DO APP
let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(){
let item=document.createElement("li");
item.innerText=inp.value;
ul.appendChild(item);
inp.value="";
})

let delBtn=document.createElement("button");
delBtn.innerText="delete";
delBtn.classList.add("delete");

item.appendChild(delBtn);
ul.appendChild(item);
inp.value="";

ul.addEventListener("click",function(){
if (event.target.nodeName=="BUTTON") {
    let listitem=event.target.parentElement;
    console.log(listitem);
    listitem.remove();
    console.log("deleted");
} else {
    console.log("don't delete");
}
})


