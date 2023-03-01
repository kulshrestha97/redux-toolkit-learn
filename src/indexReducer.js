import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./filters/filtersSlicer";
import todosReducer, { addTodos } from "./todos/todosSlice";

const handleChangeMiddleware = (store) => (next) => async (action) => {
  if (action.type === "todos/loadTodos") {
    console.log("Todo will be loaded in todo ID:");
    const fetchData = await (
      await fetch("https://jsonplaceholder.typicode.com/todos")
    ).json();
    fetchData.map((todo, index) => {
      if (index < 10) {
        next(addTodos(todo.title, todo.completed));
      }
    });
  }
  return next(action);
};

const store = configureStore({
  reducer: { filters: filtersReducer, todos: todosReducer },
  middleware: [handleChangeMiddleware],
});

export default store;
