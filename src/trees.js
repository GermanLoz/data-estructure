
class Node {
    constructor(value) {
        this.left = null
        this.right = null
        this.value = value
    }
}

class Trees {
    constructor() {
        this.root;
    }

    insert(value) {
        const newNode = new Node(value)
        if (! this.root) {
            this.root = newNode
        } else {
            let currentNode = this.root
            while(true) {
                if( value < currentNode.value) {
                    if(! currentNode.left) {
                        currentNode.left = newNode
                        return this
                    }
                    currentNode = currentNode.left
                } else {
                    if (! currentNode.right) {
                        currentNode.right = newNode
                        return this
                    }
                    currentNode = currentNode.right
                }
            }

        }
    }

    search(value, tree=this.root) {
        if( ! tree) {
            return null;
        }

        let currentNode = tree;

        while(true) {
            if(currentNode.value === value) {
                return currentNode;
            }

            if(value < currentNode.value) {
                if (! currentNode.left) {
                    return null;
                } 
                currentNode = currentNode.left; 
            } else {
                if (! currentNode.right) {
                    return null;
                }
                currentNode = currentNode.right;
            }
        }

    }
}
