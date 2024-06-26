const initialState = [];

export const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          title: action.title,
          id: Date.now(),
          completed: false,
        },
      ];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
      case 'EDIT_TODO':
          return state.map((todo) => todo.id === action.id ? {...todo, title: action.title} : todo)
    default:
      return state;
  }
};

  