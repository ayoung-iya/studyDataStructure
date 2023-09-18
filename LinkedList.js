// Node() : data와 point를 가지고 있는 객체
function Node(data) {
  this.data = data;
  this.next = null;
}

// LinkedList() : head와 length를 가지고 있는 객체
function LinkedList() {
  this.head = null;
  this.length = 0;
}

// size() : 연결 리스트 내 노드 개수 확인
LinkedList.prototype.size = function () {
  return LinkedList.length;
}

// isEmpty() : 객체 내 노드 존재 여부 파악
LinkedList.prototype.isEmpty = function () {
  return LinkedList.length === 0;
}

// printNode() : 노드 출력
LinkedList.prototype.printNode = function () {
  for (let node = this.head; node !== null; node = node.next) {
    process.stdout.write(`${node.data} -> `)
  }
  console.log('null');
}

// append() : 연결 리스트 가장 끝에 노드 추가
LinkedList.prototype.append = function (newData) {
  const newNode = new Node(newData)
  for (let node = this.head; ; node = node.next) {
    if(node.next === null) {
      node.next = newNode;
      break;
    }
  }
}

// Test code
const ll = new LinkedList();
console.log(ll);

ll.head = new Node(123);
ll.length++;
console.log(ll);

ll.head.next = new Node(456);
ll.length++;
console.log(ll);

ll.printNode();

ll.append(789);
ll.printNode();
