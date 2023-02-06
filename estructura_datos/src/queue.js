
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.length = 0
    }
    //agrega un elemento al final de la linea
    enqueue(value){
        const newNode = new Node(value)
        if (this.length == 0){
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode            
        }
        this.length++
    }
    //remueve el primer elemento de la linea
    dequeue(){
        const holdingPointer = this.first.next
        this.first = holdingPointer
        this.length--
        return this
    }
    //toma el primer el elemento de la linea
    peek(){
        return this.first
    }
}