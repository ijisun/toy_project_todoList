// 할 일 추가 - 완료
// 각 할 일에 삭제와 체크 버튼 - 완료
// 삭제 버튼을 클릭하면 할 일을 리스트에서 삭제
// 체크 버튼을 클릭하면 밑줄
// 완료된 할 일은 되돌리기 버튼을 클릭하면 되돌림
// 탭을 이용해 아이템들을 상태별로 나누어 볼 수 있음
// 모바일 버전 반응형 웹

let taskInput = document.getElementById("task-input");
let addBtn = document.getElementById("add-btn");
let taskList = [];
let checkBtn = document.getElementById("check-btn");
let deleteBtn = document.getElementById("delete-btn");

addBtn.addEventListener("click",addTask);
// checkBtn.addEventListener("click",checked);

function addTask(){
  let taskContent = taskInput.value;
  taskList.push(taskContent);
  render();
}
function render(){
  let resultHTML = "";
  for(let i=0;i<taskList.length;i++){
    resultHTML += `<div id="task">
          <div>${taskList[i]}</div>
          <div>
            <button id="check-btn" class="icon"><i class="fa-solid fa-check"></i></button>
            <button id="delete-btn" class="icon"><i class="fa-solid fa-trash-can"></i></button>
          </div>
        </div>`
  }
  document.getElementById("task-board").innerHTML = resultHTML;
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