import logo from './logo.svg';
import './App.css';
import React from 'react'
import ReactDOM from 'react-dom';

class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      password: '123456789',
      authorized: false
    }
    this.authorize = this.authorize.bind(this) 
  }

  authorize(e) {
    const password = e.target.querySelector('input[type = "pasword"]').value

    const auth = password == this.state.password

    this.setState({
      authorized: auth
    })
  }

  render() {
    let login = (
      <form action="#" onSubmit={this.authorize}>
        <input type="password" placeholder="Password" />
        <input type="submit" />
      </form>
    )

    let contactInfo = (
      <ul>
        <li>
          Home
        </li>

        <li>
        Home
        </li>

        <li>
        Home
        </li>
      </ul>
      )


      return (
        <div id="authoriziation">
          <h1>{this.state.password ? 'contact' : 'Ennter password'}</h1>
        </div>
      )
  }
}

ReactDOM.render(<Contact />, document.getElementById("app"))

function App() {
  return (
   <h1></h1>
  )
}

export default App;
