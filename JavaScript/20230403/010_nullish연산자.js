// https://ko.javascript.info/nullish-coalescing-operator
// 스펙에 추가된 지 얼마 안 된 문법입니다. 구식 브라우저는 폴리필(최신 문법을 구식 브라우저에서도 사용할 수 있도록 해주는 것)이 필요합니다.

let firstName = null;
let lastName = null;
let nickName = "licat";

console.log(firtName ?? nickName);
console.log(firtName ?? lastName ?? nickName);
console.log(firtName ?? lastName ?? nickName ?? "익명사용자");

let a = null;
let b = 10;
let c = null;

console.log(a ?? b ?? c);

// 단락회로평가와 nullish 연산자 차이점
let height = 0;
console.log(height || 100);
console.log(height ?? 100);

let height2;
console.log(height2 || 100);
console.log(height2 ?? 100);

let height3 = "";
console.log(height3 || "hello");
console.log(height3 ?? "world");

//
