/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    //将图上所有节点走两遍最后正好是相遇那个
    let a=headA
    let b=headB
    while(a!=b){
        a=a?a.next:headB
        b=b?b.next:headA
    }
    return a
};