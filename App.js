import logo from './logo.svg';
import './App.css';
import React from 'react'
import ReactDOM from 'react-dom';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '123456789',
      authorized: false
    }
    this.authorize = this.authorize.bind(this)
  }

  authorize(e) {
    const password = e.target.querySelector('input[type=password]').value
  }

}
   
function App() {
  return (
   <h1></h1>
  )
}

export default App;
