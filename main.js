// 할 일 추가 - 완료
// 각 할 일에 삭제와 체크 버튼 - 완료 
// 삭제 버튼을 클릭하면 할 일을 리스트에서 삭제
// 체크 버튼 클릭에 대한 로직
//  1. check 버튼 클릭하면 false -> true
//  2. true 이면 끝난 것으로 처리하여 밑줄
//  3. false 이면 안끝난 것으로 처리하고 그대로
// 완료된 할 일은 되돌리기 버튼을 클릭하면 되돌림
// 탭을 이용해 아이템들을 상태별로 나누어 볼 수 있음
// 모바일 버전 반응형 웹

let taskInput = document.getElementById("task-input");
let addBtn = document.getElementById("add-btn");
let taps = document.querySelectorAll(".task-taps div");
let taskList = [];
let mode = "all";
let filterList = [];

taskInput.addEventListener("keydown",function(event){
  if(event.key === "Enter"){
    event.preventDefault();
    addBtn.click();
  }
})

for(let i=1;i<taps.length;i++){
  taps[i].addEventListener("click",function(event){
    filter(event)
  })
}

function addTask(){
  let task = {
    id: randomIdGenerate(),
    taskContent: taskInput.value,
    isComplete: false,
  }
  if(taskInput.value.length > 0){ // 유효성 검사, 값이 입력됐을 때만 task 추가
    addBtn.disabled = false;
    taskList.push(task);
    taskInput.value=""
    render();
  }else{
    addBtn.disables = true;
  }
  
}
function render(){
  // 1. 내가 선택한 탭에 따라
  let list = [];
  if(mode === "all"){
    // all - taskList
    list = taskList;
  }else if(mode === "ongoing" || mode === "done"){
    // ongoing, done - filterList
    list = filterList;
  }
  // 2. 리스트를 다르게 보여주기
  let result = "";
  for(let i=0;i<list.length;i++){
    if(list[i].isComplete){
      result += `<div id="task" class="task-done-color">
      <div class="task-done">${list[i].taskContent}</div>
      <div>
        <button onclick="toggleComplete('${list[i].id}')" class="icon"><i class="fa-solid fa-arrow-rotate-right"></i></button>
        <button onclick="deleteTask('${list[i].id}')" class="icon"><i class="fa-solid fa-trash-can"></i></button>
      </div>
    </div>`
    }else{
      result += `<div id="task">
          <div>${list[i].taskContent}</div>
          <div>
            <button onclick="toggleComplete('${list[i].id}')" class="icon"><i class="fa-solid fa-check"></i></button>
            <button onclick="deleteTask('${list[i].id}')" class="icon"><i class="fa-solid fa-trash-can"></i></button>
          </div>
        </div>`
    }
  }
  document.getElementById("task-board").innerHTML = result;
}
function toggleComplete(id){
  for(let i=0;i<taskList.length;i++){
    if(taskList[i].id == id){
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  filter()
}
function deleteTask(id){
  for(let i=0;i<taskList.length;i++){
    if(taskList[i].id == id){
      taskList.splice(i,1);
      break;
    }
  }
  filter();
}
function filter(event){
  if(event){
    mode = event.target.id;
  }
  filterList = [];
  /*
  if(mode === "all"){
    // 전체 리스트
    render();
  }
  */
  if(mode === "ongoing"){
    // 진행중인 아이템
    // task.isComplete == false
    for(let i=0;i<taskList.length;i++){
      if(taskList[i].isComplete === false){
        filterList.push(taskList[i]);
      }
    }
  }else if(mode === "done"){
    // 끝난 아이템
    // task.isComplete == true
    for(let i=0;i<taskList.length;i++){
      if(taskList[i].isComplete === true){
        filterList.push(taskList[i]);
      }
    }
  }
  render();
}

function randomIdGenerate(){
  return '_' + Math.random().toString(36).substr(2, 9);
}

// 따라다니는 언더바
let underLine = document.getElementById("under-line");
let taskMenu = document.querySelectorAll(".task-tap");
taskMenu.forEach((menu) =>
  menu.addEventListener("click",(e)=>indicator(e))
);
function indicator(e){
  underLine.style.left = e.currentTarget.offsetLeft + "px";
  underLine.style.width = e.currentTarget.offsetWidth + "px";
  underLine.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight - 2 + "px";
}