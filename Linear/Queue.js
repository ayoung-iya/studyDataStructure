// Queue(): 생성자 함수로 초기 데이터 설정
function Queue(array) {
  this.array = array ? array : [];
  this.tail = array ? array.length : 0;
  this.head = 0;
}

// getBuffer(): 객체 내 데이터 셋 반환
Queue.prototype.getBuffer = function () {
  return [...this.array];
};

// isEmpty(): 객체 내 데이터 존재 여부 확인
Queue.prototype.isEmpty = function () {
  return !!this.array.length;
};

// enqueue(): 데이터 추가
Queue.prototype.enqueue = function (element) {
  return (this.array[this.tail++] = element);
};

// dequeue(): 데이터 삭제
Queue.prototype.dequeue = function () {
  if (this.tail === this.head) return undefined;

  let element = this.array[this.head];
  delete this.array[this.head++];

  return element;
};

// front(): 가장 첫 데이터 반환
Queue.prototype.front = function () {
  return this.array[0];
};

// size(): 큐 내 데이터 갯수 확인
Queue.prototype.size = function () {
  return this.array.length;
};

// clear(): 큐 초기화
Queue.prototype.clear = function () {
  this.array = [];
};

//test case
let queue = new Queue([1, 2]);

queue.enqueue(3);
queue.enqueue(4);
console.log(queue);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);

console.log(queue.size());
