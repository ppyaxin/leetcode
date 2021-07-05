/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var isPalindrome = function (head) {
    let fast = head
    let slow = head
    let prev = null

    while (fast!=null&&fast.next!=null) {
        //翻转前一部分链表
             fast=fast.next.next   
      //console.log(fast)      
        const next=slow.next
        slow.next=prev
        prev=slow
        slow=next
        //console.log(fast)

    }
    if(fast){
        slow=slow.next
    }
    while(prev&&slow){
        if(prev.val!=slow.val){
            return false
        }
        prev=prev.next
        slow=slow.next
    }
    return true
};
let head=new ListNode(1)
head.next=new ListNode(2)
head.next.next=new ListNode(3)
head.next.next.next=new ListNode(1)
console.log(isPalindrome(head))