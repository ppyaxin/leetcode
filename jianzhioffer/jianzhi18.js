/**
 * Definition for singly-linked list.

 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
    if (head == null) return null
    if (head.val == val) {
        return head.next
    }
    let result = head
    while (head) {
        if (head.next&&head.next.val==val){
            head.next=head.next.next
        }
        head=head.next
    }
    return result
};

console.log(deleteNode())