//Each Item should look like this:
//<li><label>Buy Clothes</label><button class="delete">X</button></li>
function addTask() {
    var listTask = document.createElement("li");
    listTask.innerText = function input(){
        document.getElementById("input").submit();
    };
    };

    var list = document.getElementById('todoList');
    list.appendChild(listTask);
};
var addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', addTask);
