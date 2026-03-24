// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ['hello', 'yeon'];

let boolArr: Array<boolean> = [true, false, true];
// <>로 타입 지정 == 제네릭

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, 'hello'];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
    [1, 2, 3],
    [4, 5],
];

// 튜플
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
// tup1 = [1, 2, 3];
// tup1 = ['1', '2'];

let tup2: [number, string, boolean] = [1, '2', true];

// 튜플에 배열메서드 사용할 때 주의 필요
tup1.push(1);
tup1.pop();
tup1.pop();
tup1.pop();

const users: [string, number][] = [
    ['이정환', 1],
    ['이아무개', 2],
    ['박아무개', 3],
    ['김아무개', 4],
    // [5, '최아무개'],
];
