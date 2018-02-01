var React    = require('react');
var connect  = require('react-redux').connect;

class CounterDisplay extends React.Component {
  constructor(){
    super();
  }

  render(){
    return(
      <div>
      <h2> {this.props.message} </h2>
      <h2 className="form-signin-heading">{this.props.valueLike} like(s) &bull; {this.props.valueLove} heart(s) &bull; {this.props.valueAlert} alert(s)</h2>
      </div>
    )
  }
}

function mapStateToProps(storeState){
  return {valueLike: storeState.like, valueLove: storeState.love, valueAlert: storeState.alert, message: storeState.message}
}

var CounterDisplayRedux = connect(
  mapStateToProps,
  null
)(CounterDisplay);

module.exports = CounterDisplayRedux
