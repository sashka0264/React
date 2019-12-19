import React from 'react';
import './App.css';

const App = () => {
  const images = ["./img/one.jpg", "./img/two.jpg", "./img/free.jpg"]
  Promise.all(images.map(url => {
    return new Promise((resolve, reject) => {
      const img = new Image(400, 300)
      img.src = url
      img.onload = () => resolve(img)
      img.onerror = () => reject(url)
    })
  }))
    .then(res => {
      console.log(res)
    })
  return <div>Some text...</div>
}

export default App;
