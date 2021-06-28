/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// var getKthFromEnd = function (head, k) {
//     let result=head
//     let length=0
//     while(head){
//        length++
//        head=head.next
//     }
//     for(let i=0;i<length-k;i++){
//         result=result.next
//     }
//     return result
// };
//使用双指针不统计链表长度
