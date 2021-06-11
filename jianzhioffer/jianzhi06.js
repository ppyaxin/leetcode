/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
   if(head==null) return []
   let res=[head.val]
   while(head.next){
       res.unshift(head.next.val)
       head=head.next
   }
   return res
};