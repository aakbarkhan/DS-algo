// const n1 = {
//     data: 100
// }

// const n2 = {
//     data:200
// }

// const n3 = {
//     data:300
// }
// n1.next = n2;
// n2.previous = n1;
// n3.previous = n2
// n2.next = n3;
// console.log(n1.data)
// console.log(n1.next.data)
// console.log(n2.previous.data)


// create a class for the node  whenever we want to create a node we will call this class.
// create a LinkedList class again to create a linked list,
// Under this we will 
// add a value in head
// add a value in tail
// insert at index
// get at index
// delete at index
// clear list
// print the whole list data

// Doubly Linked List
// Delete begining
// Delete begning
// Insert last
// Delete last
// 

class Node {
    constructor(data){
        this.data =data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
// pusing the data in the end
    push(data){
        let node = new Node(data);
        if(!this.head){
            this.head = node;
            this.tail = node;
        } else {
            let current = this.tail;
            this.tail = node;
            node.prev = current;
            current.next = node;
        }
        this.length++;
        return this;
    }
// delteting the date from the end;
    pop() {
        if(!this.head) return undefined;
        let current = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = current.prev;
            this.tail.next = null;
            current.prev = null;
        }
        this.length--;
        return this;
    }
    // pushing the value in front;
    unshift(data) {
        let node = new Node(data);
        if(!this.head){
            this.head = node;
            this.tail =  node;
        } else {
            let current = this.head;
            this.head = node;
            node.next = current;
            current.prev = node;
        }

        this.length++;
        return this;
    }

    shift() {
        if(!this.head) return undefined;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            let current = this.head;
            this.head = current.next;
            this.head.prev = null;
            current.next = null;
        }
        this.length--;
        return this;
    }

    insert(data, index) {
        if(index < 0 || index > this.length) return undefined;
        let node = new Node(data);
        if(index === 0) return this.unshift(node);
        if(index === this.length) return this.push(node);
        let current = this.head;
        let prev;
        let count = 0;
        while(count < index){
            prev = current;
            current = current.next;
            count++
        }
        prev.next = node;
        node.next = current;
        current.prev = node;
        node.prev = prev;
        this.length++
        return true;
    }

    reverse() {
        if(!this.head) return undefined;

        let node = this.head
        this.head = this.tail
        this.tail = node;

        let count = 0;
        let prev = null;
        let next;

        while(count < this.length) {
            next = node.next
            node.prev = next;
            node.next = prev;
            prev = node;
            node = next;
            count++
        }
        return this;
    }

    print() {
        let current = this.head;
        let count = 0;
        while(count < this.length){
            console.log(current.data);
            current = current.next;
            count++
        }
    }


    last() {
       console.log(this.tail.data, 'last ele')
    }
}

let dl = new DoublyLinkedList;
dl.push(1)
dl.push(2)
// dl.push(3)
dl.push(4)
// dl.pop()
// console.log(dl)
console.log('----')
// dl.unshift(0)
// dl.insert(11,0)
dl.insert(12,1)
dl.insert(112,3)
console.log(dl)
dl.print()
dl.last()
dl.reverse()
dl.print()
// dl.last()
