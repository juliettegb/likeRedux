function like(state=0, action) {
  if(action.type == 'increaseLike') {
    return state + 1
  } else {
    return state
  }
}

module.exports = like
