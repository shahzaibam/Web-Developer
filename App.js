import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom'

class Contact extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      password: 'shebi123',
      authorized: false
    }
    this.authorize = this.authorize.bind(this);
  }

  authorize(e){
  
    const password = e.target.querySelector('input[type="password"]').value;

    const auth = password == this.state.password

    this.setState({
      authorized : auth
    });
  }

  render() {
    let login = (
      <form action="#" onSubmit={this.authorize}>
        <input type="password" placeholder="password" />
        <input type="Submit" />
      </form>
    )

    let contactInfo = (
      <ul>
        <li>
          contact@info.com
        </li>
        <li>
          555.444.333
        </li>
      </ul>
    )

    return (
      <div id="authorization">
        <h1>{this.state.authorized ? 'Contact' : 'Enter the password'}</h1>
        {this.state.authorized ? contactInfo : login}

      </div>
    )
  }

}




function App() {
  return (
    ReactDOM.render(
      <Contact/>,
      document.getElementById("app")
    )

  )
}

export default App;
