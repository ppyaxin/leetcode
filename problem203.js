
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    if (head == null) return head
    while (head.val == val) {
        if (head.next) {
            head = head.next
        } else {
            return null
        }
    }
    let result = head
    while (head.next) {
        if (head.next.val == val) {
            head.next = head.next.next
        } else {
            head = head.next
        }
    }
    return result
};

let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(2)
head.next.next.next = new ListNode(1)
head.next.next.next.next = new ListNode(4)
head.next.next.next.next.next = new ListNode(5)
head.next.next.next.next.next.next = new ListNode(6)
console.log(head)
console.log(removeElements(head, 2))