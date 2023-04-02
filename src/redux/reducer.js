const initialState = {
  character: {},
  allCharacters: [],
  count: 1
}



function rootReducer(state = initialState, action) {
 
    switch (action.type) {
      case "QUIT_CHARACTER":
        return {
          ...state, 
          allCharacters: state.allCharacters.filter((character) => character.id !== action.payload)
        }
      case "ADD_CHARACTER":
        let characters = state.allCharacters.find((character) => character.id == action.payload.id) ? state.allCharacters : [...state.allCharacters, action.payload]
        return {
          ...state,
          allCharacters: characters
        } 
        
      default:
        return state;
      
  }
}

export default rootReducer;
