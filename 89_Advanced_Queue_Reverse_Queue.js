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

//5, 1, 7, 3, 9, -5, -1
const queue = new OptimizedQueue();
queue.enqueue(5);
queue.enqueue(1);
queue.enqueue(7);
queue.enqueue(3);
queue.enqueue(9);
queue.enqueue(-5);
queue.enqueue(-1);

console.log('Given queue is:');
queue.display();

let k = 0;
let n = queue.size();
let stack=[];
while(k < n) {
    let val = queue.dequeue();
    stack.push(val);
    k++;
}

for(let i =0; i< n; i++){
    let val = stack.pop();
    queue.enqueue(val);
}

console.log(`Reverse Queue:`);
queue.display();