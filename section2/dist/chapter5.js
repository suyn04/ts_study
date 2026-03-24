// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// 순차적으로 숫자 자동 할당됨
// 숫자형 enum
// enum은 컴파일해도 사라지지않음
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 10] = "USER";
    Role[Role["GUEST"] = 11] = "GUEST";
})(Role || (Role = {}));
//문자형 enum
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
const user1 = {
    name: '이정환',
    role: Role.ADMIN, // 0 <-- 관리자
    language: Language.korean,
};
const user2 = {
    name: '홍길동',
    role: Role.USER, // 1 <-- 일반 유저
    language: Language.english,
};
const user3 = {
    name: '아무개',
    role: Role.GUEST, // 2 <-- 게스트
};
console.log(user1, user2, user3);
export {};
