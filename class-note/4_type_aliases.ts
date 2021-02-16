// MyString타입은 string을 뜻함 
type MyString = string;
let str:MyString = 'sdsdsd';

type TodoObj = {id: string; title: string; done: boolean};
function getTodo(todo:TodoObj) {
    
}

type PersonType = {
    name: string;
    age: number;
}

let sejun:PersonType = {
    name: 'sejun',
    age: 23,
}

interface PersonItf {
    name: string;
    age: number;
}

let tejin: PersonItf = {
    name: 'tejin',
    age: 23,
}