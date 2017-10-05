import React from 'react';
class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {  isToggleOn: true,
                       isToggleOff: true
                    }
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick1 = this.handleClick1.bind(this);
      this.handleClick=this.handleClick.bind(this);
    }
  
    handleClick1() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }
    handleClick() {
        this.setState(prevState => ({
            isToggleoff: !prevState.isToggleOff
        }));
    }
  
    render() {
      return (
          <div>
        <button onClick={this.handleClick1}>
          {this.state.isToggleOn ? 'LOGIN HERE' : 'LOG OFF HERE'}
        </button>

        <button onClick={this.handleClick}>
         {this.state.isToggleOff ? 'SIGN UP HERE' : 'FORGOT PASSWORD'}
      </button>
      </div>
      );
    }
  }
export default Toggle;  