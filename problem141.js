
/**
 * Definition for singly-linked list.

 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
   let s=new Set()
   if(head==null) return false
   while(head.next){
       if(!s.has(head)){
           s.add(head)
           head=head.next
       }else{
           return true
       }
   }
   return false
};  
let head=new ListNode(3)
head.next=new ListNode(2)
head.next.next=head
console.log(hasCycle(head))