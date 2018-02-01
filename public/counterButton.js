var React   = require('react');
var connect = require('react-redux').connect;

class CounterButton extends React.Component {
  constructor(){
    super();
  }

  render(){
    return(
      <div>
        <span className="glyphicon glyphicon-thumbs-up" onClick={this.props.onLikeClick}></span>
        <span className="glyphicon glyphicon-heart" onClick={this.props.onLoveClick}></span>
        <span className="glyphicon glyphicon-alert" onClick={this.props.onAlertClick}></span>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onLikeClick: function() {
        dispatch( {type: 'increaseLike'} )
        dispatch( {type: 'updateMessage', message:"Merci pour votre j'aime !"} );
    },
    onLoveClick: function() {
        dispatch( {type: 'increaseLove'} )
        dispatch( {type: 'updateMessage', message:"Merci pour votre j'adore !"} );
    },
    onAlertClick: function() {
        dispatch( {type: 'increaseAlert'} )
        dispatch( {type: 'updateMessage', message:"Merci pour votre alerte !"} );
    }
  }
}

var CounterButtonRedux = connect(
    null,
    mapDispatchToProps
)(CounterButton);

module.exports = CounterButtonRedux
