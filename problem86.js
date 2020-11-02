/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// https://leetcode-cn.com/problems/partition-list/solution/fen-ge-lian-biao-by-leetcode/
//题目解析：可以通过设置哑节点来减少判断条件
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
var partition = function (head, x) {
    if(head==null||head.next==null) return head
    let result, temp
    let before, after
    if (head.val < x) {
        before = new ListNode(head.val)
        result = before
    } else {
        after = new ListNode(head.val)
        temp = after
    }
    head = head.next
    while (head!= null) {
        if (head.val >= x) {
            if (after==null) {
                after = new ListNode(head.val)
                temp = after
            } else {
                after.next = new ListNode(head.val)
                after=after.next
            }
        } else {
            if (before==null) {
                before = new ListNode(head.val)
                result = before
            } else {
                before.next = new ListNode(head.val)
                before=before.next
            }
        }
        head = head.next
    }
    if(before==null){
        result=temp
    }else{
        if(temp!=null){
            before.next=temp
        }
    }
    // console.log(result)
    // console.log(temp)
    return result
};
let head = new ListNode(5)
head.next = new ListNode(5)
// head.next.next = new ListNode(3)
// head.next.next.next = new ListNode(2)
// head.next.next.next.next = new ListNode(5)
// head.next.next.next.next.next = new ListNode(2)
partition(head,3)