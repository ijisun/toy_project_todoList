// Add 버튼 눌렀을 때 실행할 함수
function submit(){
  let add = document.querySelector("#add"); // 할일 입력 창에 접근
  let list = document.getElementById("todo-area"); // 추가한 값을 추가할 ul 영역에 접근
  let contents = document.createElement("li"); // li 태그 생성
  let checkbox = document.createElement("input"); // input 태그 생성
  let newP = document.createElement("p"); // p 태그 생성
  let newText = document.createTextNode(add.value); // 입력한 값을 텍스트 노드로 생성
  
  if(add.value.length > 0){ // 입력 창이 비어있지 않을 때만 실행하도록 
    contents.setAttribute("id","todo"); // li 태그에 id="todo" 속성 추가
    list.appendChild(contents); // ul 태그에 li 태그를 자식 노드로 추가
    contents.appendChild(checkbox); // li 태그에 input 태그를 자식 노드로 추가
    contents.appendChild(newP); // li 태그에 p 태그를 자식 노드로 추가
    newP.appendChild(newText); // p 태그에 text 노드를 자식 노드로 추가
    checkbox.type = "checkbox" // input 태그의 타입을 checkbox로 설정
    add.value = ""; // 제출한 뒤 입력 창 비우기
  }
}