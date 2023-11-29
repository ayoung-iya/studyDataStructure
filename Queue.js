// Queue(): 생성자 함수로 초기 데이터 설정
function Queue(array) {
  this.array = array ? array : [];
}

// getBuffer(): 객체 내 데이터 셋 반환
Queue.prototype.getBuffer = function () {
  return [...this.array];
};

// isEmpty(): 객체 내 데이터 존재 여부 확인
Queue.prototype.isEmpty = function () {
  return !!this.array.length;
};

//test case
let queue = new Queue([1, 2, 3]);
console.log(queue);

let data = queue.getBuffer();
console.log(data);
console.log(data === queue.array);

console.log(queue.isEmpty());

console.log(Object.getOwnPropertyDescriptors(Queue.prototype));
