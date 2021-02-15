//  함수의 파라미터에 타입을 정의하는 방식
function sum(a:number, b:number) {
    return a + b;
}

// 함수의 반환 값에 타입을 정의하는 방식
function printNum():number {
    return 10;
}

// 함수의 타입을 정의하는 기본 방식
function subtract(a:number, b:number):number {
    return a - b;
}

// 함수의 옵셔널 파라미터
function log(a: string, b?:string) {
 console.log(a, b);
}
log('hello', 'world');
log('hello');