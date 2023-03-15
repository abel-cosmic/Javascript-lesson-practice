let todo1 = 'Get grocieries';
let todo2 = 'Clean room';
let todo3 = 'Do laundry';
let todo4 = 'Go to the gym';

function addTodo(todoTitle) {
    let element = document.createElement('div');
    element.innerText = todoTitle;
    document.body.appendChild(element);
}
addTodo(todo1);
addTodo(todo2);
addTodo(todo3);
addTodo(todo4);