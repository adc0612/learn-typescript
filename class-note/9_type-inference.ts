// 타입 추론 기본
let a = 10;
let b = 'str';

// 함수 추론
function getData(data = 10) {
    let c = 'hi';
    return c + data;
}

let d = getData();

// 인터페이스와 제네릭을 이용한 타입 추론
interface BurgerSet<T> {
    main: T;
    size: number;
}

let set1: BurgerSet<string> = {
    main: 'cheeseBurger',
    size: 2,
}

interface BurgerSetExtra<T> extends BurgerSet<T> {
    dessert: T;
}

let set2: BurgerSetExtra<string> = {
    main: 'BulgogiBurger',
    size: 3,
    dessert: 'Brownie'
}

// Best Common Type 추론
let setArr = [1,3,true,2,'str']