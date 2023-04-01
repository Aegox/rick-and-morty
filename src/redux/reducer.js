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
        return {
          ...state,
          allCharacters: [...state.allCharacters, action.payload]
        } 
        
      default:
        return state;
      
  }
}

export default rootReducer;
