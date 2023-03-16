let todos = ['Get grocieries', 'Clean room', 'Do laundry', 'Go to the gym'];


function render() {
    document.getElementById('todo-list').innerHTML = '';
    todos.forEach(function(todoTitle) {
        const element = document.createElement('div');
        element.innerText = todoTitle;
        const todoList = document.getElementById('todo-list');
        todoList.appendChild(element);
    });
}
render();

function addButton() {
    const textbox = document.getElementById('text-input');
    const title = textbox.value;
    todos.push(title);
    render();
}