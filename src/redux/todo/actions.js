export const actions = {
  ADD_TODO: '@@TODO/ADD_TODO',
  SELECT_TODO: '@@TODO/SELECT_TODO',
  REMOVE_TODO: '@@TODO/REMOVE_TODO',
  REMOVE_SELECTED_TODOS: '@@TODO/REMOVE_SELECTED_TODOS',
};

export const addTodo = payload => {
  const newTodo = {
    name: payload,
    id: new Date().getTime().toString(),
    isSelected: false,
  };

  return {
    type: actions.ADD_TODO,
    payload: newTodo,
  }
};

export const selectTodo = payload => ({
  type: actions.SELECT_TODO,
  payload,
});

export const removeTodo = payload => ({
  type: actions.REMOVE_TODO,
  payload,
});

export const removeSelectedTodos = () => ({
  type: actions.REMOVE_SELECTED_TODOS,
});
