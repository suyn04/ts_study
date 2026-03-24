// object
// 명목적 타입 시스템 <-> 구조적 타입 시스템(property based type system)
let user = {
    id: 1,
    name: '이정환',
};
let dog = {
    name: '돌돌이',
    color: 'brown',
};
user.id;
user = {
    // id: '1',
    name: '홍길동',
};
let config = {
    apiKey: 'MY API KEY',
};
export {};
// config.apiKey = 'hacked';
