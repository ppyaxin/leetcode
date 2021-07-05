/**
 * Definition for singly-linked list.

 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let result;
  if (l1 == null) return l2;
  if (l2 == null) return l1;
  if (l1.valL <= l2.val) {
    result = l1;
    l1 = l1.next;
  } else {
    result = l2;
    l2 = l2.next;
  }
  let res = result;
  while (l1 || l2) {
    if (!l1) {
      result.next = l2;
      break;
    } else if (!l2) {
      result.next = l1;
      break;
    } else if (l1.val <= l2.val) {
      result.next = l1;
      l1 = l1.next;
      result=result.next
    } else {
      result.next = l2;
      l2 = l2.next;
      result=result.next
    }
  }
  return res;
};
