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
    unshift(val){
        let node = new Node(val);
        if(this.head === null){
            this.head = node;
            this.tail = this.head;
        } else {
            let temp = this.head;
            this.head = node; 
            node.next = temp;
        }
        this.length++;
        return this.head;
    }
    get(index){
        if(index < 0 || index > this.length)return undefined
        
        let current = this.head;
        let count = 0; 
        // while(current){
        //     if(count === index){
        //         return current
        //     }
        //     current = current.next
        // }
        // This is better:
        while(count !== index){
            current = current.next;
            count++;
        }
        return current;
    }
    set(index, val){
        if(!val) return null;
        let node = this.get(index);
        if(node){
            node.val = val;
            return true;
        } else {
            return false
        }
    }
    insert(index, val){
        let node = new Node(val);
        let count = 0;
        let current = this.head;

        if(index < 0 || index > this.length) {
           return false; 
        } else if(index === 0) {
            this.unshift(val);
            return true;
        } else if(index === this.length) {
            this.push(val);
            return true;
        } else {
            while(current){
                 if(count === index){
                    let temp = current;
                    current = node;
                    node.next = temp;
                }
                current = current.next;
                count++;
            }  
        }
    }
}
var list = new SinglyLinkedList();
list.push('Hello');
list.push('Goodbye');
list.push('!');


