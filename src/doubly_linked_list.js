class Node {
    constructor(value) {
      this.value = value
      this.next = null
      this.previus = null
    }
  }

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            previus: null
        }
        this.length = 1
        this.tail = this.head
        this.previus = null
    }

    append(value) {
        const newNode = new Node(value)
        newNode.previus = this.tail
        this.tail.next = newNode
        this.length++
        return this
    }

}