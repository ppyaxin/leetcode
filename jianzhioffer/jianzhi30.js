/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.stack = []
    this.minStack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.stack.push(x)
    if (this.minStack.length == 0 || this.minStack[this.minStack.length - 1] >= x) {
        this.minStack.push(x)
    }
    console.log(this.minStack)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (this.stack.pop() == this.minStack[this.minStack.length - 1]) {
        this.minStack.pop()
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
    return this.minStack[this.minStack.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.minStack()
 */
var obj = new MinStack()
obj.push(-2)
obj.push(0)
obj.push(-1)
obj.pop()

var param_3 = obj.top()
var param_4 = obj.min()
console.log(param_4)