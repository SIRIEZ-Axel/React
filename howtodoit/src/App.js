import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './hello';
import App from './hello';

const app = () => {
  return (
    <div classname="App">
      <Hello />
    </div>
  )
}

let n = 0

function render() {
  React.createElement('span', {}, n)
  window.setInterval(() => {
    n++
    render()
  }, 1000)
  return n
}

render()



export default App;