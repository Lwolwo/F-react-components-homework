import React, { Component } from 'react';
import './Chat.scss';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatBox from './ChatBox/ChatBox';
import ChatInput from './ChatInput/ChatInput';
import shopData from '../data/shop.json';
import answersData from '../data/answers.json';
import { ROLE } from '../constants';

class Chat extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      shop: {},
      messages: [],
    };
  }

  componentDidMount() {
    const defaultMessage = answersData.find((answer) => answer.tags.includes('DEFAULT'));
    const messages = this.state.messages.concat(defaultMessage);

    setTimeout(() => {
      this.setState({
        shop: shopData,
        messages,
      });
    }, 1000);
  }

  handleInputChange = (value) => {
    const message = {
      text: value,
      role: ROLE.CUSTOMER,
    };

    const answer = answersData.find((robotAnswer) => robotAnswer.tags.includes(value));
    if (answer) {
      const answerMessage = {
        role: ROLE.ROBOT,
        text: answer.text,
      };

      this.setState((prev) => ({
        messages: prev.messages.concat([message, answerMessage]),
      }));
    } else {
      this.setState((prev) => ({
        messages: prev.messages.concat(message),
      }));
    }
  };

  render() {
    const { shop, messages } = this.state;
    return (
      <main className="Chat">
        <ChatHeader shop={shop} />
        <ChatBox messages={messages} />
        <ChatInput handleInputChange={this.handleInputChange} />
      </main>
    );
  }
}

export default Chat;
