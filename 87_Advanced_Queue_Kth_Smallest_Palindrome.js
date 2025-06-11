// "You have 2 digits only 1, and 2.
// You have to find Kth smallest even digit palindromic string formed by these two digits.
// 11, 22, 1111, 1221, 2112, 2222. 111111, 112211, 121121, 122221, 211112, 212212, 221122, 222222 ....."

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

//Using this to find smallest even digit palindromic string
const queue = new OptimizedQueue();
let answer;
let k = 0;
let kth_Element = 5

queue.enqueue("11")
queue.enqueue("22")
let n = queue.size();
console.log('queue=', queue)
while(k != n) {
    n = queue.size();
    answer = queue.dequeue();
    
    let ansLen = answer.length;
    let mid = ansLen/2;
    
    let part1 = answer.substring(0, mid);
    let part2 = answer.substring(mid, ansLen);
    
    queue.enqueue(`${part1}11${part2}`)
    queue.enqueue(`${part1}22${part2}`)
    
    k++;
    if( k == kth_Element){
        break;
    }
}
console.log('\n');
console.log(`${kth_Element}th smallest even digit palindromic string formed by these two digits is: ${answer}`)