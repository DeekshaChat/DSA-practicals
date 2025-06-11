// "Reverse a queue:
// 5, 1, 7, 3, 9, -5, -1"

// Optimized Queue Implementation
class OptimizedQueue {
    constructor() {
        this.items = {};
        this.head = 0;
        this.tail = 0;
    }
    
    // Add element to the back of the queue - O(1)
    enqueue(element) {
        this.items[this.tail] = element;
        this.tail++;
    }
    
    // Remove and return element from the front - O(1)
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        
        const item = this.items[this.head];
        delete this.items[this.head];
        this.head++;
        
        // Reset pointers when queue becomes empty for memory efficiency
        if (this.head === this.tail) {
            this.head = 0;
            this.tail = 0;
        }
        
        return item;
    }
    
    // View the front element without removing it
    front() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.head];
    }
    
    // Check if queue is empty
    isEmpty() {
        return this.head === this.tail;
    }
    
    // Get the size of the queue
    size() {
        return this.tail - this.head;
    }
    
    // Clear the queue
    clear() {
        this.items = {};
        this.head = 0;
        this.tail = 0;
    }
    
    // Convert to array for display
    toArray() {
        const result = [];
        for (let i = this.head; i < this.tail; i++) {
            result.push(this.items[i]);
        }
        return result;
    }
    
    // Display queue contents
    display() {
        console.log(this.toArray());
    }
}

//5,7,1,0,3,5,9,6
const queue = new OptimizedQueue();
queue.enqueue(5);
queue.enqueue(7);
queue.enqueue(1);
queue.enqueue(0);
queue.enqueue(3);
queue.enqueue(5);
queue.enqueue(9);
queue.enqueue(6);

console.log('Given queue is:');
queue.display();

let kth_Element = 3;
let k = kth_Element;
let stack=[];

// pop k elements from queue into stack
while(k > 0) {
    let val = queue.dequeue();
    stack.push(val);
    k--;
}
let n = stack.length;

// push k-element from stack to queue
for(let i = 0; i < n; i++){
    let val = stack.pop();
    queue.enqueue(val);
}

// pop n-k element from queue and push it instantly
let m = queue.size() - kth_Element;
while(m > 0) {
    let val = queue.dequeue();
    queue.enqueue(val);
    m--;
}

console.log(`Reverse Queue by ${kth_Element} element:`);
queue.display();