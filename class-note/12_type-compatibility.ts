// 타입 호환

// 1. interface
interface Burger {
    name: string;
    ingredients: string;
}

interface Candy {
    name: string;
}

let burger: Burger;
let candy: Candy;

// burger = candy; // burger에는 candy가 가진 속성과 타입이 부족하므로 호환이 안 됨
candy = burger; // candy에는 burger가 가진 속성과 타입이 부족하므로 호환이 됨!


// 2. function
let oneNum = function (a: number) {
    // ...
}

let twoNum = function (a: number, b: number) {
    // ...
}

// oneNum = twoNum // oneNum에는 인자가 하나 들어가있어 인자를 두 개 넘기는 twoNum은 호환이 안 됨
twoNum = oneNum // twoNum에는 인자가 두개가 들어가있어 인자를 한 개 넘기는 oneNum은 호환이 됨!


// 3. Generic
interface Empty<T> {
    // ...
} 
let empty1: Empty<string>;
let empty2: Empty<number>;
// 제네릭에 들어가는 타입은 다르지만 인터페이스 내부는 비어있으므로 호환이 됨!
empty1 = empty2  
empty2 = empty1

interface NotEmpty<T>{
    data: T;
}
let notEmpty1: NotEmpty<string>;
let notEmpty2: NotEmpty<number>;
// 제네릭에 들어가는 다른 타입이 각 속성에 들어가기 때문에 호한이 안 됨
// notEmpty1 = notEmpty2;
// notEmpty2 = notEmpty1;
