/**
 * Binary Heaps are very similar to Binary search trees in that order is significant! In a MaxBinaryHeap,
 * parent nodes are always lager than the child nodes. In a MinBinaryHeap, parent nodes are always smaller 
 * than child nodes.
 * 
 * if we are give an array of the heap values. any parent at n has children at 2n+1 and 2n+2
 * if we have a child at n the parent is located at Math.floor((n-1)/2)
 * 
 * we will insert values into the array and bubble up the higher numbers. We will do this by comparing
 * the value to the parent and swap them if it is bigger... all the way up
 */

class MaxBinaryHeap {
    constructor(){
    this.values =[41,39,33,18,27,12];
    }
    insert(value){
        this.values.push(value);
        if(this.values.length === 1) return values;
        this.bubbleUP()

        // let parent = values[Math.floor((index-1)/2)];
    }
    bubbleUp(){
        let index = this.values.length - 1;
        const element = this.values(index);
        while(index > 0){
            let parentIndex = Math.floor((index-1)/2);
            let parent = this.value[parentIndex]
            if(element <= parent) break;
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex; 
        }
    }
    // we want to remove an element- usually we remove the parent node
    // to do this we will switch the parent with one of the child nodes 
    /**             remove 41
     *                   41
     *                  /  \
     *                39    33
     *               /  \   /
     *              18  27  12    
     * 
     *                   12
     *                  /  \
     *                39    33
     *               /  \   
     *              18  27     
     * 
     *  now we need to bubble 12 down- we are switching 12 with the larger child
     * 
     *                   39
     *                  /  \
     *                12    33
     *               /  \   
     *              18  27   
     *  
     *                   39
     *                  /  \
     *                27    33
     *               /  \   
     *              18  12 
     */

    extractMax(){
        const max = this.values[0];
        const last = this.value.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }
    bubbleDown(){
        let index = 0;
        const length = this.values.length;
        while(true){
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild;
            let rightChild;
            let swap = null; 
            if(leftChildIndex < length){
                leftChild = this.values(leftChildIndex)
                if(leftChild > element){
                    swap = leftChildIndex
                }
            }
            if(rightChildIndex < length){
                rightChild = this.values(rightChildIndex)
                if(
                    (swap === null && rightChild > element) || 
                    (swap !== null && rightChild > leftChild)
                ) {
                    swap = rightChildIndex;
                }
            }
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        } 
    }
}

let heap = new MaxBinaryHeap();
heap.insert(55);

// [41,39,33,18,27,12];
//  0   1  2  3  4  5