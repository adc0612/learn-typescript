// 유니언 타입으로 정의
type Burgers = 'Cheese' | 'Veg' | 'Fish';

// 맵드 타입이용해서 모든 속성을 string으로 변경
type BurgerStr = {[K in Burgers]: string};

const burgerSet1: BurgerStr = {
    Cheese: 'Goda',
    Veg: 'Onion',
    Fish: 'Pollack',
}

// 맵드 타입이용해서 모든 속성을 boolean으로 변경
type BurgerBool = {[K in Burgers]: boolean};

const burgerSet2: BurgerBool = {
    Cheese: true,
    Veg: false,
    Fish: true,
}

// Javascript의 for..in 반복문
let strArr = ['a', 'b', 'c'];
for (let key in strArr){
    console.log(key); // 배열의 index (0, 1 ,2)
    console.log(strArr[key]); // 배열의 value (a, b, c)
}