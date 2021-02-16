interface User {
    age: number;
    name: string;
};

// 변수에 interface활용
let seho: User = {
    age: 33,
    name: 'seho',
}


// 옵션(?) 활용
interface User2 {
    age: number;
    name?: string;
};

let tak: User2 = {
    age: 25,
}



// 함수의 인자를 정의하는 인터페이스
function getUser(user: User) {
    console.log(user);
}

let titan = {
    name: 'titan',
    age: 30,
}

getUser(titan);

let capt = {
    job: 'captain',
    name: 'capt',
    age: 50,
}

getUser(capt); // 에러 없음

let irobot = {
    job: 'navigator',
    age: 120,
}

// getUser(irobot); //Property 'name' is missing in type '{ job: string; age: number; }' but required in type 'User'.


// 함수 구조를 정의하는 인터페이스
interface SumFunction {
    (a:number, b:number): number;
}

let sumFunct: SumFunction;

sumFunct = function(a:number, b:number): number {
    return a + b;
}


// 인덱싱 방식을 정의하는 인터페이스
interface StringArray {
    [index: number]: string;
}

let strarr:StringArray;
strarr = ['a','b','c'];
strarr[0] = 't'; // t
// strarr[0] = 10; // Type 'number' is not assignable to type 'string'.


// Dictionay 패턴 
interface StringRegexDictionary {
    [key: string]: RegExp;
}

let regexObj:StringRegexDictionary = {
    cssFile: /\.css$/,
    jsFile: /\.js$/,
};

regexObj['cssFile'] =/\.scss$/;
// regexObj['cssFile'] = 'a'; //Type 'string' is not assignable to type 'RegExp'.


// 인터페이스 확장
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person{
    language: string;
}

let captain:Developer = {
    language: 'ts',
    age: 20,
    name: 'captain',
}