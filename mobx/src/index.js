import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DevTools from 'mobx-react-devtools'
import { observer } from 'mobx-react'; // наблюдатель
import { observable, action, computed } from 'mobx'; // наблюдаемый
import './index.css';

class Store {
  @observable state = {
    name: 'Дмитрий',
    age: 34,
    user: null
  }
  @action setName(name) {
    this.state.name = name;
  }
  @action setAge(age) {
    this.state.age = age;
  }
  @computed get nickName() { // это вычисляемое значение, декоратор computed нужен для оптимизации
    console.log(`generate nickName: ${this.state.name}${this.state.age}`);
    return `${this.state.name}${this.state.age}`
  }
  @action.bound getUser = async function() { // bound, чтобы контекст не потерять
    try {
      const res = await (await fetch("https://www.anapioficeandfire.com/api/characters/583")).json();
      this.setUser(res.name);
    } catch(err) {
      console.error('Что-то пошло не так', err)
    }
  }
  @action setUser(user) {
    this.state.user = user
  }
}

const store = new Store();

@observer class App extends Component {
  componentDidMount() {
    const {store} = this.props;
    store.getUser();
  }

  render() {
    const {store} = this.props;
    return (
      <div className="App">
        <DevTools/>
        <h2>{store.state.user}</h2>

        <h2>{store.nickName}</h2>

        <div>
          { 
            store.state.name
          }
          <input onChange={(e) => store.setName(e.target.value)}/>
        </div>

        <div>
          { 
            store.state.age
          }
          <input onChange={(e) => store.setAge(e.target.value)}/>
        </div>


      </div>
    );
  }
}

ReactDOM.render(<App store={store} />, document.getElementById('root'));

// function log(target, name, descriptor) {
//   // target - это обьект, ссылающийся на саму функцию конструктор Sum
//   // name - имя нашей функции sum
//   // descriptor - объект, который описывает поведение свойства sum
//   const base = descriptor.value; // наша функция sum
//   if (typeof base === 'function') {
//     descriptor.value = function(...args) { // делаем новую функцию
//       console.log(`Аргументы функции:${args}`);
//       try {
//         const result = base(...args);
//         console.log(`Результат:${result}`);
//         return result;
//       } catch (e) {
//         console.log(`Что-то пошло не так :( ${e}`);
//         throw e;
//       }
//     }
//   }
//   return descriptor;
// }

// class Sum {
//   @log sum(a, b) {
//     if (!a || !b) {
//       throw new Error()
//     }
//     const res = a + b;
//     return res;
//   }  
// }

// const x = new Sum();
// x.sum(3, 2)