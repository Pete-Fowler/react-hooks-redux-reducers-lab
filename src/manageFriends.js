// state = {friends: []};

export function manageFriends(state, action) {
  if(action.type === 'friends/add')
    return {friends: [
      ...state.friends, {...action.payload}
    ]}
  if(action.type === 'friends/remove') {
    const kept = state.friends.filter(friend => friend.id !== action.payload);
    return {friends: kept}
  }
  else
    return state;
}
