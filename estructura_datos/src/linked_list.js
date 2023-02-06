class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class MySinglyLinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null,
      };
      this.tail = this.head;
  
      this.length = 1;
    }
    append(value) {
      const newNode = new Node(value);
  
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
  
      return this;
    }
    prepend(value) {
      const newNode = new Node(value);
  
      newNode.next = this.head;
      this.head = newNode;
  
      this.length++;
  
      return this;
    }
    remove(value) {
        const firstPointer = this.getNodeByValue(value)
        this.append(firstPointer.next.value)
        const replacePointer = firstPointer.next.next
        firstPointer.next = replacePointer
        this.length++
        return this

    }
    getNodeByValue(value) {
        let currentNode = this.head
        let lastNode = null
        for(let index = 0; index <= this.length; index++){
            if(currentNode.value == value){
                return lastNode
            }
            lastNode = currentNode
            currentNode = currentNode.next
        }

    }
    insert(index, value) {
      if (index >= this.length) {
        return this.append(value);
      }
  
      const newNode = new Node(value);
      const firstPointer = this.getTheIndex(index - 1);
      const holdingPointer = firstPointer.next;
      firstPointer.next = newNode;
      newNode.next = holdingPointer;
  
      this.length++;
      return this;
    }
  
    getTheIndex(index) {
      let counter = 0;
      let currentNode = this.head;
  
      while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
  
      return currentNode;
    }
  }
  