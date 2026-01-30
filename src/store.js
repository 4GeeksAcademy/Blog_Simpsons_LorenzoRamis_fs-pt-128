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

    case 'fav_char':

      const character = action.payload;
      const exist_char = store.favorite.find(item => item.id === character.id);

      if (!character || !character.id) {
        console.error("Intentaste añadir un favorito sin ID válido:", character);
        return store;
      }

      if (exist_char) {
        return store;
      }

      return {
        ...store,
        favorite: [...store.favorite, character]
      };

      case 'fav_loc':

      const location = action.payload;
      const exist_loc = store.favorite.find(item => item.id === location.id);

      if (!location || !location.id) {
        console.error("Intentaste añadir un favorito sin ID válido:", location);
        return store;
      }

      if (exist_loc) {
        return store;
      }

      return {
        ...store,
        favorite: [...store.favorite, location]
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
