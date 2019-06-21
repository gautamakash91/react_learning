import React from 'react';

export default class App extends React.Component {

  render() {
    console.log(this.props);
    return (
      <div>
          The sum is: 
          {parseInt(this.props.val1) + parseInt(this.props.val2)}
      </div>
    );
  }
}