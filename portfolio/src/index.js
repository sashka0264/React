import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {

  if (1) {
    const myError = new Error('please improve your code')
    console.log(myError) // please improve your code
  }

  return (
    <div></div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));


