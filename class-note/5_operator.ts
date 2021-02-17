// Union Type (string과 number둘 다 가능)
// 특정 변수나 parameter에 `|`를 이용하여 한 가지 이상에 type을 쓸수있다.
// TypeGuard
let union1: string | number;
union1 = 'test';
union1 = 10;

function logMsg(value: string | number){
    if (typeof value === 'number'){
        value.toLocaleString();
    } else if (typeof value ==='string'){
        value.toString();
    } else {
        throw new TypeError('value must be string or number');
    }
}
logMsg('hello');
logMsg(10);

interface DeveloperTest {
    name: string;
    skill: string;
}

interface PersonTest {
    name: string;
    age: number;
}

// 함수 인자로 인터페이스 둘을 Union Type으로 썻을 때 함수 안에서는 공통된 속성만 이용이 가능하다.
// 이유는 someone이 DeveloperTest와 PersonTest 둘 중 뭐가 올지 모르기 때문에,
// 공통된 속성을 써야 에러를 방지할 수 있으므로 그렇게 셋팅되어있다.
function askSomeoneUnion(someone: DeveloperTest | PersonTest){
    someone.name;
}
askSomeoneUnion({ name: 'P1', skill: 'sk1'});
askSomeoneUnion({ name: 'P2', age: 18});

// Intersection 인터섹션
// 특정 변수나 parameter에 `&`를 이용하여 한 가지 이상에 type이 공통된 것을 쓸 수 있게 한다.
// 그래서 보통 아래와 같이는 안 쓴다. 있을 수 없는 type으로 never타입을 반환하고 에러를 낸다.
let inter1: string & number;
// inter1 = 0; //Type 'number' is not assignable to type 'never'

// 함수 인자로 인터페이스 둘을 Intersection Type으로 썻을 때 함수 안에서는 두 타입에 속성 모두 이용이 가능하다.
function askSomeoneInter(someone: DeveloperTest & PersonTest) {
    someone.name;
    someone.skill;
    someone.age;
}
askSomeoneInter({ name: 'P3', skill: 'sk3', age: 12 });
