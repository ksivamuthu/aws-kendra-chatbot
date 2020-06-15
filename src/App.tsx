import React, { Component } from 'react';
import Amplify from 'aws-amplify';
import { ChatBot, AmplifyTheme } from 'aws-amplify-react';
import './App.css';

import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

// Imported default theme can be customized by overloading attributes
const myTheme = {
  ...AmplifyTheme,
  sectionHeader: {
    ...AmplifyTheme.sectionHeader,
  }
};

class App extends Component {

  handleComplete(err: any, confirmation: any) {
    if (err) {
      alert('Bot conversation failed')
      return;
    }

    return 'Takeout Order Booked. Thank you! what would you like to do next?';
  }

  render() {
    return (
      <div className="App">
        <div className="chat-bot">
          <ChatBot
            title="Restaurant Bot"
            theme={myTheme}
            botName="restaurant_bot_dev"
            welcomeMessage="Welcome, how can I help you today?"
            onComplete={this.handleComplete.bind(this)}
            clearOnComplete={true}
            conversationModeOn={false}
          />
        </div>
      </div>
    );
  }
}

export default App;