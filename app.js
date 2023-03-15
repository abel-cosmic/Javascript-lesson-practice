let todos = ['Get grocieries', 'Clean room', 'Do laundry', 'Go to the gym'];

function addTodo(todoTitle) {
    let element = document.createElement('div');
    element.innerText = todoTitle;
    document.body.appendChild(element);
}
for (let i = 0, len = todos.length; i < len; i++) {
    addTodo(todos[i]);
}