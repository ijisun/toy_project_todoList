function submit(){
  let add = document.querySelector("#add");
  let list = document.getElementById("todo-area");
  let contents = document.createElement("li");
  let checkbox = document.createElement("input");
  let newP = document.createElement("p");
  let newText = document.createTextNode(add.value);
  
  contents.setAttribute("id","todo");
  list.appendChild(contents);
  contents.appendChild(checkbox);
  contents.appendChild(newP);
  newP.appendChild(newText);
  checkbox.type = "checkbox"

  add.value = "";
}