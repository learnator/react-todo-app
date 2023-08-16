const todoItems = [];

export function addTodoItem(item) {
  todoItems.push(item);
}

export function removeTodo(id) {
  todoItems.splice();
}

export function getAllTodoItems() {
  return todoItems;
}
