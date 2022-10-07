// This code hides a website’s contact page behind a password form that must be entered correctly before accessing contact info.

import React from 'react';
import ReactDOM from 'react-dom';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'swordfish',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password == this.state.password;
    this.setState({
      authorized: auth
    });
  }

  render() {
    const login=(
      <form 
      action='#'
      onSubmit={this.authorize} >
      <input 
        type="password" 
        placeholder="Password"/>
      <input type="submit"/>
      </form>
    );

    const contactInfo = (
        <ul>
          <li>
            client@example.com
          </li>
          <li>
            555.555.5555
          </li>
        </ul>
    )


    return (
      <div id="authorization">
        <h1>{this.state.authorized ? 
'Contact' : 'Enter the Password'}</h1>
        {this.state.authorized ? contactInfo : login}
      </div>
    );
  }
}

ReactDOM.render(
  <Contact />, 
  document.getElementById('app')
);
