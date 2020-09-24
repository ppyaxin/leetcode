//Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//前后-->后前
var swapPairs = function (head) {
    //当剩余不足两个节点时停止反转，返回头结点
    if (head == null || head.next == null) {
        return head
    }
    //记录后节点
    let temp = head.next
    //前节点连上反转后的链表
    head.next = swapPairs(temp.next)
    //后节点下一个为前节点
    temp.next = head
    //返回后节点
    return temp
}
let head =new ListNode(1)
head.next =new ListNode(2)
head.next.next =new ListNode(3)
head.next.next.next =new ListNode(4)
let answer=swapPairs(head)
for(let i=0;i<3;i++){
    console.log(answer)
    answer=answer.next
}
console.log(answer)

