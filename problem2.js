
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let result = new ListNode(0)
    let temp =result
    while (l1 && l2) {
        result.val = l1.val + l2.val + result.val
        if (result.val >= 10) {
            result.val = result.val - 10
            result.next = new ListNode(1)
        } else if(l1.next||l2.next){
            result.next = new ListNode(0)
        }
        result=result.next
        l1=l1.next
        l2=l2.next       
    }
    while (l1) {
        result.val = l1.val + result.val
        if (result.val >= 10) {
            result.val = result.val - 10
            result.next = new ListNode(1)
        } else if(l1.next){
            result.next = new ListNode(0)
        }
        result = result.next
        l1=l1.next
    }
    while (l2) {
        result.val = l2.val + result.val
        if (result.val >= 10) {
            result.val = result.val - 10
            result.next = new ListNode(1)
        } else if(l2.next){
            result.next = new ListNode(0)
        }
        result = result.next
        l2=l2.next
    } 
    return temp
};
let l1=new ListNode(2)
l1.next=new ListNode(4)
//l1.next.next=new ListNode(3)
let l2=new ListNode(5)
l2.next=new ListNode(6)
l2.next.next=new ListNode(4)

console.log(addTwoNumbers(l1,l2))