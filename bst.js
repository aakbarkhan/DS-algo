// Binary (search) tree
// Abstrract data typeof(ADT)
// What does a binary seach tree data structure contains
// Root node, Left child node, right child node.
// Left node is always less then the right node.
// two pointer left pointers and right pointers.
// Balanced BST and Unbalance BST
// Three types of tree Traversing/walking thorugh the tree node in BST
// Inorder(The output can be seen )-Preorder(take the root, left, right)- postOrder(left, right and take the root last). Taking the branches and root last ..heheheh what a way to take the tree. 
// When we insert data to a BST data strucure, if we keep on addin then the tree becomes unbalance, but we will asscume when we walk through the BST ds, we are working on the balance BST.
// left node--no children, sibing , parents, chidlren
// same level, level, two edges away form the root. root is counted as 'zero' level.
// Unique path in the tree, if not unique or many path to reach, then its not tree.
// zero or one or two children, the node should have. :-) heheh.
// trniary tree wheere node will hwave at most 3 childrens. heheh
// 

class Node{
    constructor(val){
        this.val = val;
        // pointers.
        this.left = null;
        this.right = null;
    }
}

// create a binary tree
let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');
let f = new Node('f');
let g = new Node('g');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

// BFT
// width of the tree
// left to right in the same level.
// queue data structure can be implemented.
// 

const breathFirstTraversal = (root) => {
    const queue = [root]; // create an array an make avialbe the first root node to the queue.
    while(queue.length > 0) {
        let current = queue.shift() //remove the first form the array.
        console.log(current.val)
        if(current.left != null) {
            queue.push(current.left)
        }
        if(current.right != null) {
            queue.push(current.right)
        }
    }
}

breathFirstTraversal(a);

// breadth first search(bfs(root, target)), that will have a root, and the target as 
// an argument and seach in the binary tree
// the functon should return the boolean whether or not the tree contain the target value.
//

const bfs = (root, target) => {
    const queue = [root]; // create an array an make avialbe the first root node to the queue.
    while(queue.length > 0) {
        let current = queue.shift() //remove the first form the array.
        if(current.val == target) {
            return true;
        }
        if(current.left != null) {
            queue.push(current.left)
        }
        if(current.right != null) {
            queue.push(current.right)
        }
    }
    return false;
}

console.log(bfs(a, 'z'));
console.log(bfs(a, 'a'));

const sumTree = (root) => {
    const queue = [root]; // create an array an make avialbe the first root node to the queue.
    let sum = 0;
    while(queue.length > 0) {
        let current = queue.shift() //remove the first form the array.
        sum += current.val;
        if(current.left != null) {
            queue.push(current.left)
        }
        if(current.right != null) {
            queue.push(current.right)
        }
    }
    return sum;
}

console.log(sumTree(a));

// const depthFirstPrint = (root) => {
//     let stack = [root];
//     while(stack.length > 0) {
//         let current = stack.pop();
//         console.log(current.val, 'd')
//         if(current.right !=null) {
//             stack.push(current.right)
//         }
//         if(current.left !=null) {
//             stack.push(current.left)
//         }
//     }
// }


depthFirstPrint(a);
