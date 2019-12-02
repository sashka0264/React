// npm i typescript -g, tsc helloWorld.ts или tsc, если есть config
// смысл typescript в том, что нельзя менять тип данных у переменных

console.warn("Start Part 1");

// ! string !
let message: string = "I am string";
message = "12";


// ! boolean !
const isFeatching: boolean = true;
const int: number = 42; 
console.log(typeof message, typeof isFeatching, typeof int);


// ! number! 
const numberArray: number[] = [0, 1, 1, 2, 3, 5, 8, 13];
const numberArray2: Array<number> = [0, 1, 1, 2, 3, 5, 8, 13];
// записи выше - это одно и то же
const stringArray: Array<string> = ["Ура, я строка!", "Да, как и я! :)"];
const stringArray2: Array<string> = ["Ура, я строка!", "Да, как и я! :)"];
stringArray.push("Еще одна...");
console.log(numberArray, numberArray2, stringArray);


// ! Tuple, таповый тип данных !
const contact: [string, number] = ["Sanya", 10];

// когда можно комбинировать типы данных в массиве, но в определенной последовательности (!)


// ! Any, изменяемый тип данных !
let variable: any = 42;
variable = "New String";
variable = [];


// ! Void- этот тип обычно используется для запрета возвращения значения из функции, но null и undefined могут вернуться !
function sayName(name: string):void {
  console.log(name);
  return null;
}
// error sayName(5);
sayName("Sasha");
// function sayName2(name: string):void {
//   return name;
// }
// error, т. к. тип функция не должна ничего возвращать


// ! Never - то же самое, что void, только даже null и undefined не могут вернуться !
// function throwErr(name: string):never {
  // throw new Error(name);
  // return null;
  // error, т.к не может ничего вернуть, никогда, вообще, даже null
// }
// function infinit():never {
  // while(true) {}
  // бесконечный цикл
// }
// throwErr("Кажется, что-то пошло не так");


// ! Type !
type Login = string;
const login: Login = "admin";
type Id = string | number;
const id: Id = "String";
const id2: Id = 5;
// const id3: Id = true; - error


// ! null и undefined !
type SomeType = string | null | undefined;
const some: SomeType = "hello";
const some2: SomeType = null;
const some3: SomeType = undefined;
// const some4: SomeType = 5; - error

console.warn("End Part 1");
console.warn("Start Part 2");

interface Rect {
  readonly id: string,
  color?: string, 
  size: {
    width: number,
    height: number
  }
}
// ? говорит о необязательности параметра, а interface говорит, что доступно только для чтения

const react1: Rect = {
  // Type '{}' is missing the following properties from type 'Rect': id, size - т.к. обязательные параметры
  id: "5",
  size: {
    width: 5, 
    height: 10
  }
}
const react2: Rect = {
  id: "8",
  size: {
    width: 23, 
    height: 22
  }
}
react2.color = "black";
console.log(react2);

interface RectWithArea extends Rect {
  getArea: () => number;
}
const react3: RectWithArea = {
  id: "123",
  size: {
    width: 10, 
    height: 20
  },
  getArea() {
    return this.size.width*this.size.height;
  }
}
console.log(react3.getArea());

console.warn("End Part 2");
console.warn("Start Part 3");

interface IClock {
  time: Date
  setTime(date: Date): void,
  others?: boolean
}

class Clock implements IClock {
  time: Date = new Date()

  setTime(date: Date): void {
    this.time = date;
    console.log(this.time);
  }
}
const newClock = new Clock;
newClock.setTime(new Date());

console.warn("End Part 3");
console.warn("Start Part 4");

interface Styles {
  [key: string] : string
}
// если все не перечислять

const css: Styles = {
  border: "1px solid black",
  marginTop: "5px",
  borderRadius: "6px"
}

console.warn("End Part 4");
console.warn("Start Part 5");

enum Membership {
  Simple, 
  Standart,
  Premium
}

const membership = Membership.Standart;
const membershipReverse = Membership[1];
console.log(membership, membershipReverse);

enum SocialMedia {
  VK = "VK", 
  FACEBOOK = "Facebook",
  INSTAGRAM = "Instagram"
}

const social = SocialMedia.INSTAGRAM;
console.log(social);

function add(a: number, b: number):number {
  return a+b;
}

interface MyPosition {
  x: number | undefined
  y: number | undefined
}

// Если функция не будет ничего получать, то вернет интерфейс MyPosition
interface MyPositionWithDefault extends MyPosition {
  default: string
}

function position(): MyPosition;
function position(a: number): MyPositionWithDefault;
function position(a: number, b: number): MyPosition;

function position(a?: number, b?: number) {
  if (!a && !b) {
    return {x: undefined, y: undefined};
  }

  if (a && !b) {
    return {x: a, y: b, default: a.toString()}
  }

  return {x: a, y:b};
};

console.log(position());
console.log(position(42));
console.log(position(10, 15));

console.warn("End Part 5");
console.warn("Start Part 6");

class Typescript {
  version: string

  constructor(version: string) {
    this.version = version
  }

  info(name: string) {
    return `[${name}] Typescript version ${this.version}`
  }
}

// class Car {
//   readonly model: string
//   readonly numberOfWheels: number = 4

//   constructor(theModel: string) {
//     this.model = theModel;
//   }
// }

class Car {
  readonly numberOfWheels: number = 4

  constructor(readonly model: string) {}
}

class Animal {
  
}