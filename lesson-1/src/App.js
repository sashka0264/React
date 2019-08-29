import React from 'react';

function Car(props) {
  return (
      <div className="cars__item">
          <h3 className="cars__item-title">{props.model}</h3>
          <p className="cars__item-text">Year: <strong>{props.year}</strong></p>
      </div>
  )
}
// Описание структуры нашего компонента

const App = (
  <div className="cars">
      <Car model="Ford Focus" year="2017"/>
      <Car model="Audi A8" year="2015"/>
      <Car model="Mazda 3" year="2010"/> 
  </div>       
)
// Элемент из наших компонентов



export default App;
