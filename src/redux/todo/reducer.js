import { actions } from "./actions";

const initialState = {
  todos: [],
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_TODO:
      return {
        ...state,
        todos: state.todos.concat(action.payload),
      };
    case actions.SELECT_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => todo.id === action.payload ? { ...todo, isSelected: !todo.isSelected } : todo),
      };
    case actions.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };
    case actions.REMOVE_SELECTED_TODOS:
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.isSelected),
      };
    default:
      return state;
  }
}

export default reducer;
