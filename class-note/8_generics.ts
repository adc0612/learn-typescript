
function logString(val: string):string {
    console.log(val);
    return val;
}

const aText = logString('a');
aText.charAt(0);

function logNumber(val: number):number {
    console.log(val);
    return val;
}

let bNum = logNumber(10);
bNum.toLocaleString();

function logText(val: string | number) {
    console.log(val);
    return val;
}

let cText = logText('c');
// cText.split('');

// generics선언
function logTextGenerics<T> (val: T): T {
    console.log(val);
    return val;
}

// string타입으로 선언
let stringTxt = logTextGenerics<string>('abcd');
stringTxt.split('');

// number타입으로 선언
let numTxt = logTextGenerics<number>(100);
numTxt.toLocaleString();

// 인터페이스 제너릭 선언
interface DropdownItem<T> {
    value: T;
    selected: boolean;
}

let dropdownObj: DropdownItem<number> = {value: 29, selected: false};

//  제네릭의 타입 제한 1 - 배열
function logTextLength1<T>(text: T[]): T[] {
    console.log(text.length);
    text.forEach(function (text) {
        console.log(text);
    });
    return text;
}

logTextLength1<string>(['hi', 'abc']);
logTextLength1<number>([1, 2]);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
    length: number;
}
// extends: 기존에 정의된 interface를 확장할 때 쓰임
function logTextLength2<T extends LengthType>(text: T): T {
    text.length;
    return text;
}
logTextLength2('abc'); // string은 length속성을 내장하고있음
// logTextLength2(10); // 타입이 number인 length속성이 없어서 에러발생
logTextLength2([10, 20]); // 배열은 length속성을 내장하고있음
logTextLength2({length: 20, name: 'sd'}) //객체에 직접 length속성을 넣어주면 사용가능

// 제네릭 타입 제한 3 - key of
interface ShoppingItem {
    name: string;
    price: number;
    stock: number; 
}
// key of: extends한 인터페이스 안 key값중 하나만 넣을 수 있음
function getShoppingitemOption<T extends keyof ShoppingItem>(item: T): T {
    return item;
}
getShoppingitemOption('stock');