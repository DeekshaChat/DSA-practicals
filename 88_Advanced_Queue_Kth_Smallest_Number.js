// "Only 1, 2, 3 digits.
// Any of these digits any no of times.
// Kth smallest number;
// 1, 2, 3, 11, 12, 13, 21, 22, 23....."

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

const queue = new OptimizedQueue();
let arr = [1,2,3]
let answer;
let k=0;
let kthElement = 13;
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

let n = queue.size();
while( k != n){
    n = queue.size();
    answer = queue.dequeue();
    let temp = answer * 10;
    for(let i = 0; i < arr.length; i++) {
        queue.enqueue(temp+i+1);
    }
    if(k == kthElement-1) {
        break;
    }
    k++
}

console.log(`${kthElement}-th smallest number is ${answer}`);