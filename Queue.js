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

//enqueue(): 데이터 추가
Queue.prototype.enqueue = function (element) {
  return this.array.push(element);
};

//dequeue(): 데이터 삭제
Queue.prototype.dequeue = function () {
  return this.array.shift();
};

//test case
let queue = new Queue([1, 2]);
console.log(queue);

queue.enqueue(3);
queue.enqueue(4);
console.log(queue);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);