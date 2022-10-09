const initialState = { numberOfPresents: 0 };

export function managePresents(state = initialState, action) {
  if(action.type === 'presents/increase') 
    return { numberOfPresents: initialState.numberOfPresents += 1};
  else
    return state;
}
