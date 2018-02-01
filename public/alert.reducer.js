function alert(state=0, action) {
  if(action.type == 'increaseAlert') {
      return state + 1
  } else {
    return state
  }
}

module.exports = alert
