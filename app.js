let todos = ['Get grocieries', 'Clean room', 'Do laundry', 'Go to the gym'];

todos.forEach(function(todoTitle) {
    let element = document.createElement('div');
    element.innerText = todoTitle;
    document.body.appendChild(element);
});