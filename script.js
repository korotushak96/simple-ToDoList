

let list = document.querySelector('.todo_list');

if (localStorage.getItem('list')) list.innerHTML = localStorage.getItem('list')

let input = document.querySelector('.input_field');
let allTask = document.querySelectorAll('li');



function newElement(){
    backToAll();
    let newTask = input.value;
    let li = document.createElement('li');
    let text= document.createTextNode(newTask);
    li.appendChild(text);
    li.classList.add('list_item');
    if (newTask == ''){
        alert('hey, don\'t be a couch potato, bro!')
    } else {
        list.appendChild(li);
    }
    input.value = '';
    
    let span = document.createElement('span');
    let txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);
    li.appendChild(span);
    allTask = document.querySelectorAll('li');
    localStorage.setItem("list", list.innerHTML)
};

for (let i =0; i< allTask.length; i++){
    let span = document.createElement('span');
    let txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);
    allTask[i].appendChild(span);
}



list.onclick = (e) => {
    let target = e.target;
    if (target.className == 'close'){
        list.removeChild(target.parentNode);
        allTask = document.querySelectorAll('li');
    };
    if (target.className == 'list_item' || target.className == 'checked' ) {
        target.classList.toggle('list_item');
        target.classList.toggle('checked');
    } 
    localStorage.setItem("list", list.innerHTML)
}

function sortListActive(){
    let active = [];
    while(list.firstChild){
        list.removeChild(list.firstChild)
    }
    for(let i = 0; i<allTask.length;i++){
        let current = allTask[i];
        if (current.className == 'list_item') list.appendChild(current);
    }
}

function sortListDone(){
    let active = [];
    while(list.firstChild){
        list.removeChild(list.firstChild)
    }
    for(let i = 0; i<allTask.length;i++){
        let current = allTask[i];
        if (current.className == 'checked') list.appendChild(current);
    }
}

function backToAll(){
    while(list.firstChild){
        list.removeChild(list.firstChild)
    };
    for(let i = 0; i<allTask.length;i++){
        let current = allTask[i];
        list.appendChild(current);
    }
}





