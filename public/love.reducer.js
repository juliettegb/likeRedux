function love(state=0, action) {
  if(action.type == 'increaseLove') {
      return state + 1
  } else {
    return state
  }
}

module.exports = love
