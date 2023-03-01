const { createReducer, nanoid, createAction } = require("@reduxjs/toolkit");
const initialState = [{ id: 1, text: "Create Redux", completed: false }];
export const addTodos = createAction("todos/addTodo", (text, completed) => {
  return {
    payload: {
      text,
      completed,
    },
  };
});
export const removeTodos = createAction("todos/removeTodo", (id) => {
  return {
    payload: {
      id,
    },
  };
});
export const loadTodos = createAction("todos/loadTodos");
export const markAllAsCompleted = createAction("todos/markAllAsCompleted");
const maxId = (state) => {
  const id = state.reduce((maxId, todos) => Math.max(maxId, todos.id), -1) + 1;
  console.log(id);
  return id;
};

const todosReducer = createReducer(initialState, (builder) =>
builder
  .addCase(
    addTodos,
    (state, action) =>
      void state.push({
        id: maxId(state),
        text: action.payload.text,
        completed: action.payload.completed,
      })
  )
  .addCase(removeTodos, (state, action) => {
    state = state.filter((todo) => todo.id !== action.payload.id);
    return state;
  })
  .addCase(markAllAsCompleted, (state) => {
    state = state.map((todo) => {
      return { ...todo, completed: true };
    });
  })
);

export default todosReducer;
