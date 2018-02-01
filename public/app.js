var React               = require('react');
var ReactDOM            = require('react-dom');
var CounterDisplayRedux = require('./counterDisplay');
var CounterButtonRedux  = require('./counterButton');
var Image               = require('./image');
var createStore         =  require('redux').createStore;
var Provider            =  require('react-redux').Provider;

var combineReducers = require('redux').combineReducers;

var like = require('./like.reducer.js');
var love = require('./love.reducer.js');
var alert = require('./alert.reducer.js');
var message = require('./message.reducer.js');

var globalReducers = combineReducers({like, love, alert, message});

/* REDUCER AVANT DECOUPAGE
function counterReducer(storeState, action) {
  if(action.type == 'increaseLike') {
      return { like: storeState.like + 1, love: storeState.love, alert: storeState.alert, message: "Merci pour votre j'aime !" }
  } else if(action.type == 'increaseLove') {
      return { like: storeState.like, love: storeState.love + 1, alert: storeState.alert, message: "Merci pour votre j'adore !" }
  } else if(action.type == 'increaseAlert') {
      return { like: storeState.like, love: storeState.love, alert: storeState.alert + 1, message: "Merci pour votre alerte !" }
  } else {
      return { like: 0, love:0, alert:0, message: null}
  }
} Attention, après coup j'ai ajouté un dispatch updateMessage qui n'était pas pris en compte dans cette version du reducer
+ hydratation ajoutée direct dans les reducers mais sinon penser à rajouter {like:0, love:0, alert: 0, message: null} dans const store*/

const store = createStore(globalReducers);

class App extends React.Component {
  constructor(){
    super();
  }

  render(){
    return(
      <div className="row">
      <div className="col-xs-offset-2 col-xs-8">
      <CounterDisplayRedux/>
      <Image/>
      <CounterButtonRedux/>
      </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store = {store}>
    <App/>
  </Provider>
  ,
  document.getElementById('content')
);
