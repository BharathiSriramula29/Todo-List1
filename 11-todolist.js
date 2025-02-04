const todolist= JSON.parse(localStorage.getItem('todolist')) || [{
   name:'lunch',
   duedate:'22/12/2022'
   }
  /* {
    name:'dinner',
    duedate:'22/11/2033'
   }*/
   ];
tendertodolist();
function tendertodolist(){
let todolistHTML='';
todolist.forEach( function(todoobject,i){
     const name =todoobject.name;
      const duedate=todoobject.duedate;
   //const {name,duedate}=todolist;
      const html=`<div> ${name} 
      </div>
      <div>${duedate}</div>
      <button class="todo-delete-button js-todo-delete-button"> Delete</button>
       `
      todolistHTML+=html;
});
document.querySelector(".js-todo-list").innerHTML=todolistHTML;

document.querySelectorAll(".js-todo-delete-button").forEach((deletebutton,index) =>
{
deletebutton.addEventListener("click",() =>
{
    todolist.splice(index,1);
    tendertodolist();
});
});



}



document.querySelector(".js-todo-add-button").addEventListener("click",() =>  {
       addtodo();
});






function addtodo()
{
     const inputelement =document.querySelector(".js-input-value");
     const inputduedate=document.querySelector(".js-input-duedate");
     const name=inputelement.value;
     const duedate=inputduedate.value;
     todolist.push({
     name:name,     //name,duedate
     duedate:duedate
     }); 
     inputelement.value='';
     inputduedate.value='';
     tendertodolist();
     localStorage.setItem('todolist',JSON.stringify(todolist));
 }
