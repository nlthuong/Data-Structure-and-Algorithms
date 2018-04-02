module.exports = function Stack() {
    var top = null;
    var count = 0;

    //Returns the number of items in the queue
    this.GetCount = function () {
        return count;
    }

    /* Methods */
    // Push in item
    this.Push = function (data) {
        var node = {
            data: data,
            next: null
        };
        node.next = top;
        top = node;
        count++;
    }

    // Show item
    this.Peek = function () {
        return top===null?null:top.data;
    }

    // Take out item
    this.Pop = function () {
        var out = top;
        top = top.next;
        count--;
        return out===null?null:out.data;
    }

    // Display all items in stack
    this.Display = function () {
        if(top===null) {
            console.log(null)
            return;
        }
        var temp = top;
        while(temp!==null) {
            console.log(temp.data);
            temp = temp.next; 
        }
    }
} 

