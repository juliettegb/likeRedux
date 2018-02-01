function message(state=null, action) {
  if(action.type == 'updateMessage') {
      return action.message
  } else {
    return state
  }
}

module.exports = message
