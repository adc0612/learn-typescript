// class를 제공하지 않을 때 js식 class 선언
// class를 babel로 돌리면 아래와 같이 나온다.
function Person(name, age) {
    this.name = name;
    this.age = age;
}

let capt = new Person('t1', 25);

// ES2015 ES6 문법의 class
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

let sejin = new Person('sejin', 29);
