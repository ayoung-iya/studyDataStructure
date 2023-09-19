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
  return this.length;
};

// isEmpty() : 객체 내 노드 존재 여부 파악
LinkedList.prototype.isEmpty = function () {
  return this.length === 0;
};

// printNode() : 노드 출력
LinkedList.prototype.printNode = function () {
  for (let node = this.head; node !== null; node = node.next) {
    process.stdout.write(`${node.data} -> `);
  }
  console.log("null");
};

// append() : 연결 리스트 가장 끝에 노드 추가
LinkedList.prototype.append = function (newData) {
  const newNode = new Node(newData);
  let current = this.head;

  if (this.head === null) {
    this.head = newNode;
  } else {
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }

  this.length++;
};

// insert() : position 위치에 노드 추가
LinkedList.prototype.insert = function (newData, position = 0) {
  if (position < 0 || position > this.length) return false;

  const newNode = new Node(newData);
  let index = 0;
  let cur = this.head;
  let pre;

  if (position === 0) {
    newNode.next = cur;
    this.head = newNode;
  } else {
    while (index++ < position) {
      pre = cur;
      cur = cur.next;
    }

    newNode.next = cur;
    pre.next = newNode;
  }

  this.length++;
  return true;
};

// remove() : value 데이터를 찾아 노드 삭제
LinkedList.prototype.remove = function (value) {
  let cur = this.head;
  let pre = cur;

  // 해당 데이터를 찾을 때가지 순회
  while (cur.data !== value && cur.next !== null) {
    pre = cur;
    cur = cur.next;
  }

  if (cur.data !== value) {
    return null;
  }

  if (cur === this.head) {
    this.head = cur.next;
  } else {
    pre.next = cur.next;
  }

  this.length--;

  return cur.data;
};

// removeAt() : position 위치 노드 삭제
LinkedList.prototype.removeAt = function (position = 0) {
  if (position > this.length || position < 0) return null;

  let index = 0;
  let cur = this.head;
  let pre;

  if (position === 0) {
    this.head = cur.next;
  } else {
    while (index++ < position) {
      pre = cur;
      cur = cur.next;
    }

    pre.next = cur.next;
  }

  this.length--;

  return cur.data;
};

// indexOf() : value 값을 갖는 노드 위치 반환
LinkedList.prototype.indexOf = function (value) {
  let index = 0;
  let cur = this.head;

  while (cur !== null) {
    if (cur.data === value) return index;

    index++;
    cur = cur.next;
  }

  return -1;
};

// Test code
let ll = new LinkedList();

ll.insert(1);
ll.insert(10);
ll.insert(100);
ll.insert(2, 1);
ll.insert(3, 3);

console.log(ll.indexOf(1000));
console.log(ll.indexOf(1));
console.log(ll.indexOf(100));
console.log(ll.indexOf(10));
