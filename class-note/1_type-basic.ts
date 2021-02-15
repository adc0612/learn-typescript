// string 선언
let str:string = 'hello';

// 숫자 선언
let num:number = 10;

// 배열 선언
// 숫자 배열
let arr: Array<number> = [1,2,3];
let items: number[] = [1,2,3];
// string 배열
let strArr: Array<string> = ['a','b','c'];

// 튜플
// 배열 index마다 타입정할 수 있음
let address: [string, number] = ['seoul', 100];

// 객체
let obj: object = {};
// 객체 속성마다 타입정할 수 있음
let person: {name: string, age: number} = {
    name: 'alter',
    age: 10,
}

// Any
let any1: any = 'hi';
let any2: any = 10;
let any3: any = ['a', 2, true];