import React, { Component } from 'react';
import './ChatInput.scss';

class ChatInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      inputValue: '',
    };
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  handleKeyUp(e) {
    if (e.keyCode === 13) {
      this.props.handleInputChange(this.state.inputValue);
      this.setState({
        inputValue: '',
      });
    }
  }

  handleClick() {
    this.props.handleInputChange(this.state.inputValue);
    this.setState({
      inputValue: '',
    });
  }

  render() {
    return (
      <footer className="ChatInput">
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange.bind(this)}
          onKeyUp={this.handleKeyUp.bind(this)}
        />
        <button type="button" onClick={this.handleClick.bind(this)}>
          Send
        </button>
      </footer>
    );
  }
}

export default ChatInput;
