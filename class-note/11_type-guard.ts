 interface Burger {
     name: string;
     ingredients: string;
 }

 interface Fries {
     name: string;
     size: number;
 }

 function introduce(): Burger | Fries {
     return {name: 'Cheese Burger', size: 3, ingredients: 'Cheese'}
 }

 let order = introduce();
//  console.log(order.ingredients); //공통되지않은 속성 접근 불가능
//  console.log(order.size); //공통되지않은 속성 접근 불가능
 
// 타입 단언이용
if ((order as Burger).ingredients) {
    let ingredients = (order as Burger).ingredients;
    console.log(ingredients);
}else if ((order as Fries).size){
    let size = (order as Fries).size;
    console.log(size);
}

// 함수에 타입 가드 정의
// target이 Burger interface면 true 반환
// target이 Fries interface면 false 반환
function isBurger(target: Burger | Fries): target is Burger {
    return (target as Burger).ingredients !== undefined;
}

if (isBurger(order)) {
    console.log(order.ingredients); //Burger Interface
} else {
    console.log(order.size); //Fries Interface
}