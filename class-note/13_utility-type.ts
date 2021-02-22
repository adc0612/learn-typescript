interface Product {
    id: number,
    name: string;
    price: number;
    brand: string;
    stock: number;
}

// 상품 목록을 받아오는 API함수
function fetchProducts(): Promise<Product[]> {
    //...
}

// interface ProductDetail {
//     id: number,
//     name: string,
//     price: number,
// }

// 특정 상품의 상세정보를 표시하는 함수
// 1. Pick 이용
type ProductDetail = Pick<Product, 'id' | 'name' | 'price'>;
function displayProductDetail(shoppingItem: ProductDetail) {
    // ...
}

// 2. Omit 이용
type ProductDetail2 = Omit<Product, 'brand' | 'stock'>;
function displayProductDetail2(shoppingItem: ProductDetail) {
    // ...
}

// update 함수인자를 위한 interface
// 모든 속성이 필요없기 떄문에 optional처리
// interface UpdateProduct {
//     id?: number,
//     name?: string;
//     price?: number;
//     brand?: string;
//     stock?: number;
// }

// 3. Partial 이용
type UpdateProduct = Partial<Product>;
// 특정 상품정보를 업데이트하는 함수 (모든속성은 optional)
function updateProductItem(produtItem: UpdateProduct) {
    // ...
}

// Partial 구현
// 1.Optional Parameter
type UpdateProduct1 = {
    id?: number,
    name?: string;
    price?: number;
    brand?: string;
    stock?: number;
}
// 2. key로 속성을 연결
type UpdateProduct2 = {
    id?: Product['id'],
    name?: Product['name'];
    price?: Product['price'];
    brand?: Product['brand'];
    stock?: Product['stock'];
}


// 3. for..in으로 구성
// Javascript에서 배열안 key값들을 접근하는 for..in반복문 같은 것 
type UpdateProduct3 = {
    [P in 'id' | 'name' | 'price' | 'brand' | 'stock']?: Product[P];
}

// 4. for..in keyof 이용
type UpdateProduct4 = {
    [P in keyof Product]?: Product[P];
}

// 5. 제네릭 이용
type PartialImplement<T> = {
    [P in keyof T]?: T[P];
}