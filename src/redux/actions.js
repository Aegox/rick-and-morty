
export function quitCharacter (id) {
  return {
    type: "QUIT_CHARACTER",
    payload: id
  }     
}

export function AddCharacter (id) {
  return async function (dispatch) {
    return fetch(`https://rickandmortyapi.com/api/character/${id}`) 
      .then(response => response.json())
      .then(data => dispatch({type: "ADD_CHARACTER" , payload: data}))
      .catch((err) => console.log(err))
  }
}
