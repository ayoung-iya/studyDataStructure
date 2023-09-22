// Node(): data와 point인 next, prev를 가지고 있는 객체
function Node(data) {
  this.data = data;
  this.prev = null;
  this.next = null;
}

// LinkedList(): head, tail과 length를 가지고 있는 객체
function DoubleLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

// size(): 연결 리스트 내 노드 개수 확인
DoubleLinkedList.prototype.size = function () {
  return this.length;
};

// isEmpty(): 객체 내 노드 존재 여부 확인
DoubleLinkedList.prototype.isEmpty = function () {
  return this.length === 0;
};

let dll = new DoubleLinkedList();
let node;
console.log(dll);

node = new Node(123);
dll.head = node;
dll.tail = node;
dll.length++;
console.log(dll);

node = new Node(456);
dll.tail.next = node;
node.prev = dll.tail;
dll.tail = node;
dll.length++;
console.log(dll);
