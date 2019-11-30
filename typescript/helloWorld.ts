// npm i typescript -g, tsc helloWorld.ts или tsc, если есть config
// смысл typescript в том, что нельзя менять тип данных у переменных

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
stringArray.push("Еще одна...");
console.log(numberArray, numberArray2, stringArray);

// ! Tuple, таповый тип данных !
const contact: [string, number] = ["Sanya", 10];
// когда можно комбинировать типы данных в массиве, но в определенной последовательности (!)

// ! Any, изменяемый тип данных !
let variable: any = 42;
variable = "New String";