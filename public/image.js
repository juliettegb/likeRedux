var React   = require('react');

class Image extends React.Component {
  constructor(){
    super();
  }

  render(){
    return(
      <div>
      <img className="img-responsive" src="./flowers.jpg"/>
      </div>
    )
  }
}

module.exports = Image
