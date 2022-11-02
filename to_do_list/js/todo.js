class Task {
    constructor(content, id=0, completed=false, name = "") {
        this.content = content;
        this.id = id;
        this.completed = completed;
        this.name = name;
        this.display = true;
    }
}

function populate(x) {
    if (x.display == true) {
        let task = document.createElement('div');
        task.setAttribute("id", x.id)
        
        let btn = document.createElement('input');
        btn.setAttribute("class", "checker");
        btn.setAttribute("type", "checkbox");
        btn.setAttribute("onclick", "strikethrough(" + x.id + ")");
        
        let tasktext = document.createElement('p');


        let delbtn = document.createElement('button');
        delbtn.setAttribute("class", "trash");
        delbtn.setAttribute("onclick", "trashTask(" + x.id + ")");
        delbtn.textContent = "❌";

        tasktext.innerHTML = x.content;
  
        task.appendChild(btn);
        task.appendChild(tasktext)
        task.appendChild(delbtn);
        
        if (x.completed == true) {
            btn.checked = true;
            tasktext.setAttribute("style", "text-decoration: line-through;");
        }

        document.querySelector('section.task-list').appendChild(task);
        }
        updateCounter();
}

function getTask() {
    var newTask = document.getElementById("inputbox").value;
    if (newTask != "") {
        let y = new Task(newTask);
        y.name = "task-item" + toDoList.length;
        y.id = toDoList.length;
        toDoList.push(y);
        populate(y);
    }
}

function strikethrough(x) {
    let doc = document.getElementById(x);
    if (toDoList[x].completed == false) {
        doc.childNodes[0].setAttribute("style", "text-decoration: line-through;"); 
        toDoList[x].completed = true;
    }
    else {
        doc.childNodes[0].setAttribute("style", "text-decoration: none;"); 
        toDoList[x].completed = false;
    }
    updateCounter();    
}

function showCompleted() {
    removeAllChildNodes(box);
    for (let i = 0; i < toDoList.length; i++) {
        if (toDoList[i].completed == true) {
            populate(toDoList[i]);
        }
}
updateCounter();
}
function showActive() {
    removeAllChildNodes(box);
    for (let i = 0; i < toDoList.length; i++) {
        if (toDoList[i].completed == false) {
            populate(toDoList[i]);
        }
    }
    updateCounter();
}
function showAll() {
    removeAllChildNodes(box);
    for (let i = 0; i < toDoList.length; i++) {
        populate(toDoList[i]);
        }
    updateCounter();
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    updateCounter();
}
function updateCounter(){
    let counter = 0;
    for (let i = 0; i < toDoList.length; i++) {
        if (toDoList[i].completed == false) {
            counter++;
        }
        let left = document.getElementById("remaining");
        left.innerHTML = counter +" tasks left";
    }
}
function trashTask(x){
    removeAllChildNodes(box);
        toDoList[x].completed = true;
        toDoList[x].display = false;
        for (let i = 0; i < toDoList.length; i++) {
            populate(toDoList[i]);
        }
    updateCounter();
}


let box = document.querySelector('section.task-list');

let study = new Task("Study");
let toDoList = [study];

for (let i = 0; i < toDoList.length; i++) {
    populate(toDoList[i]);
}
updateCounter();
strikethrough();