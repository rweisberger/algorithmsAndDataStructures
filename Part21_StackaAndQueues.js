class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    // in this case we are adding to the beginning of the list- it is like unshift
    push(value){
        let newNode = new Node(value);
        
        if(this.stack.length === 0){
            this.first = node;
            this.last = node;
        } else {
            let temp = this.first;
            this.first = newNode;
            newNode.next = temp;
        }
        this.length++;
        return this.length;
    }
    pop(){
        if(this.length === 0) return null;

        let removedNode = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.length--;
        return removedNode.value;
    }
}