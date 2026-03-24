// 타입 별칭
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
};

// 함수 안에서 지정한 타입 별칭은 내부에서만 적용됨
function func() {
    type User = {};
}

let user: User = {
    id: 1,
    name: '이정환',
    nickname: 'winterlood',
    birth: '1997.01.07.',
    bio: '안녕하세요',
    location: '부천시',
};

let user2: User = {
    id: 1,
    name: '홍길동',
    nickname: 'winterlood',
    birth: '1997.01.07.',
    bio: '안녕하세요',
    location: '부천시',
};

// 인덱스 시그니처
// 빈 객체도 규칙을 어긴 프로퍼티가 없는거기 때문에 오류 안남
type CountryCodes = {
    [key: string]: string;
    // Korea: string;
    // UnitedState: string;
    // UnitedKingdom: string;
};
let countryCodes: CountryCodes = {
    Korea: 'ko',
    UnitedState: 'us',
    UnitedKingdom: 'uk',
};

type CountryNumberCodes = {
    [key: string]: number;
    // 추가적인 지정은 인덱스 시그니처의 밸류타입과 같거나 호환되어야함
    // Korea: string;
};
let countryNumberCodes: CountryNumberCodes = {
    // Korea: 'ko',
    // UnitedState: 840,
    // UnitedKingdom: 826,
};
