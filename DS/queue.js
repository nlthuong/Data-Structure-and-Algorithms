module.exports = function Queue () {
    var head = null;
    var tail = null;
    var count = 0;

    //Returns the number of items in the queue
    this.GetCount = function () {
        return count;
    }

    // Methods
    // Push item to queue
    this.Enqueue = function (data) {
        var node = {
            data : data,
            next: null
        }
        if(tail===null){
            tail=node;
            head=node;
        }else{
            tail.next = node;
            tail = node;
        }
        count++;
    }

    // Take out item
    this.Dequeue = function () {
        if(count===0){
            return "Queue empty!";
        }else if (count===1){
            head = null;
            tail = null;
            return head.data;
        }else{
            head = head.next;
        }
    }
    // Show item at position
    this.PeekAt = function (index) {
        if(index>count) return 'Out of range';
        var i = 1;;
        var current = head;
        while(i!==index){
            current = current.next;
            i++;
        } 
        return current.data;
    }

    // Display all items in queue
    this.Display = function () {
        if(head===null) {
            console.log(null)
            return;
        }
        var temp = head;
        while(temp!==null) {
            console.log(temp.data);
            temp = temp.next; 
        }
    }
}