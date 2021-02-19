// 타입 단언 type-assertion
let a;
a = 'str';
a = 20;
//수동으로 a를 string으로 지정
let b = a as string;

// DOM api


// let div = document.querySelector('div'); //div: HTMLDivElement | null
let div = document.querySelector('div') as HTMLDivElement; 
