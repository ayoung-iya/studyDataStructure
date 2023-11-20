// Stack(): 생성자 함수
function Stack(array) {
  this.array = array ? array : [];
}

// getBuffer() : 객체 내 데이터 셋 변환
Stack.prototype.getBuffer = function () {
  return this.array.slice();
};

// isEmpty() : 객체 내 데이터 o/x
Stack.prototype.isEmpty = function () {
  return !this.array.length;
};

//testCase
let stack = new Stack([1, 2, 3]);

console.log(stack);

let data = stack.getBuffer();
console.log(data);
console.log(data === stack.array); // output: false -> 데이터가 복사되었다

console.log(stack.isEmpty());
console.log(Object.getOwnPropertyDescriptors(Stack.prototype));
