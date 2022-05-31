const { func } = require("prop-types");


function Queue() {
    collection = [];
    this.enqueue = (val) => {
        collection.push(val)
    }

    this.dequeue = (val) => {
        return collection.shift();
    }

    this.front = () => {
        return collection[0];
    }

    this.size = () => {
        return collection.length;
    }

    this.isEmpty = () => {
        return (collection.length === 0);
    }

    this.print = () => {
        console.log(collection);
    }
}

function PriorityQueue() {
    let collection = [];

    this.isEmpty = () => {
        return (collection.length === 0);
    }

    this.PrintCollection = function() {
        console.log(collection);
    }

    this.enqueue = function(element) {
        if(this.isEmpty()){
            collection.push(element)
        } else {
            let added = false;
            for(let i=0;i < collection.length; i++) {
                if(element[1] < collection[i][1]){
                    collection.splice(i,0,element);
                    added = true;
                    break;
                }
            }
            if(!added){
                collection.push(element);
            }
        }
    }

    this.dequeue = function() {
        return collection.shift();
    }
    this.front = function() {
        return collection[0];
    }

    this.size = function() {
        return collection.length;
    }
}


// let q = new Queue();

// q.enqueue('a');
// q.enqueue('b');
// q.enqueue('c');
// q.enqueue('d')

// q.print();
// q.dequeue()
// q.front();
// q.print()
// q.size()

// here the element is an array;
// so element[1] = 2,3,4
// same as collection[i][1] denotes number;
var pq = new PriorityQueue(); 

// pq.enqueue(['Beau Carnes', 2]); 
// pq.enqueue(['Briana Swift', 2])
pq.enqueue(['Beau Carnes', 2]); 
pq.enqueue(['Ewa Mitulska-Wójcik', 1]);
pq.PrintCollection();
// console.log(pq.front());
// pq.dequeue();
// pq.PrintCollection();