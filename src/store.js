export const initialStore=()=>{
  return{
    message: null,
    characters: [ ]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

      case 'set_character':
        return{
          ...store,
          characters: action.payload
        }

        case 'set_location':
        return{
          ...store,
          locations: action.payload
        }
    
    default:
      throw Error('Unknown action.');
  }    
}
