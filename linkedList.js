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
// n1.prev = nill;
// n2.next = n3;
// n2.prev = n1;
// console.log(n1)

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

class Node {
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }
    // All the methods will be add below this line
    // so that the methods will be availabel in this class
    insertFirst(data){
        let node = new Node(data, this.head);
        this.head = node;
        this.size++
    }
    
    insertLast(data){
        let node = new Node(data);
        if(!this.head){
            this.head = node;
        } else {
            let current = this.head;
            while(current.next){
                current = current.next
            }
            current.next = node
        }
        this.size++
    }
    insertAt(data, index){
        if(index>0 && index > this.size){
            return;
        }
        if(index === 0){
            this.head = new Node(data, this.head);
            return;
        }
        let node = new Node(data)
        let previous, current;
        let count = 0;
        current = this.head;
        while(count < index){
            previous = current;
            current = current.next;
            // console.log(previous, 'this is the previous')
            // console.log(current, 'this is the current')
            count++
        }
        node.next = current; // node next value is assigned with the current node i.e the right index value 
        previous.next = node; // previous data next value is assign with the new node
        this.size++
    }
    // get at index
    getAt(index){
        let current = this.head
        let count = 0
        while(current){
            if(count === index){
                console.log(current.data, 'data at index '+ index)
            }
            count++
            current = current.next
        }
        return null
    }

    // Remove at index
    removeAt(index){
        if(index > 0 && index > this.size){
            return;
        }

        let current = this.head;
        let previous;
        let count = 0;
        // remove first
        if(index === 0){
            this.head = current.next
        } else {
            while(count < index) {
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next
        }
        this.size--;

    }

    // Clear all list node
    clearAll(){
        this.head = null;
        this.size = 0;
    }


    printList(){
        let current = this.head;
        let count =0;
        while(count< this.size){
            console.log(current.data)
            count++
            current = current.next
        }
    }
    
}


let ll = new LinkedList()

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertLast(300);
ll.insertAt(400,1);
ll.insertAt(500,0);
ll.getAt(3)
ll.printList()
ll.removeAt(1);
console.log('')
ll.printList()



// console.log(ll)