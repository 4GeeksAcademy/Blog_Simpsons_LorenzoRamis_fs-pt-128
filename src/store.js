export const initialStore = () => {
  return {
    message: null,
    characters: [],
    favorite: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

    case 'set_character':
      return {
        ...store,
        characters: action.payload
      }

    case 'set_location':
      return {
        ...store,
        locations: action.payload
      }

    case 'add_fav':

      const character = action.payload;
      const exist = store.favorite.find(item => item.id === character.id);

      if (!character || !character.id) {
        console.error("Intentaste añadir un favorito sin ID válido:", character);
        return store;
      }

      if (exist) {
        return store;
      }

      return {
        ...store,
        favorite: [...store.favorite, character]
      };

      case 'delete_fav':
      return {
        ...store,
        favorite: store.favorite.filter(item => item.id !== action.payload)
      };

    default:
      throw Error('Unknown action.');
  }
}
