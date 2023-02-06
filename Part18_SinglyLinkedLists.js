/* What is a single linked list?
it is a bunch of elements with no indexes. One points to the next with a next pointer. Each element is called a node.
The head is the beginning, the tail is the end. We also keep track of the length to make things 
easier.
random access is not allowed. However, when things are inserted and deleted we do not need to re-index
*/

//  define linked list class


class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

// this is the way we would need to add additional nodes without having a linked list class
// var first = new Node("Hi");
// first.next = new Node("there")
// first.next.next = new Node("How")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you?")

class SinglyLinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(val){
        let newNode = new Node(val);
        if (!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    } 
    traverse(){
        let current = this.head;
        while(current){
            // console.log(current.val);
            current = current.next;
        }
    }
    pop(){
        if(list.length === 0) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        console.log(current.val);
        console.log(newTail.val);
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift(){
        if(list.length === 0) return undefined;
        let deleteNode = this.head;
        this.head = deleteNode.next;
        list.length--;
        return deleteNode;
    }
}
var list = new SinglyLinkedList();
list.push('Hello');
list.push('Goodbye');
list.push('!');


