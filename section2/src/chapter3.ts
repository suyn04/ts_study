// object
// 명목적 타입 시스템 <-> 구조적 타입 시스템(property based type system)
let user: {
    // id?는 선택적 프로퍼티(optional property)
    id?: number;
    name: string;
} = {
    id: 1,
    name: '이정환',
};

let dog: {
    name: string;
    color: string;
} = {
    name: '돌돌이',
    color: 'brown',
};

user.id;

user = {
    // id: '1',
    name: '홍길동',
};

let config: {
    // readonly는 값 변경 안됨
    readonly apiKey: string;
} = {
    apiKey: 'MY API KEY',
};

// config.apiKey = 'hacked';
