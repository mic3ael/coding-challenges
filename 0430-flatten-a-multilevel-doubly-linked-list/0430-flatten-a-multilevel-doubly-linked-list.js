/**
 * // Definition for a _Node.
 * function _Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var flatten = function(head) {
    const nextNodes = [];
    let prevNode = null;
    let current = head;
    while(current != null || nextNodes.length != 0){
        if(current == null){
            current = nextNodes.pop();
            prev.next = current;
            current.prev = prev;
        }

        if(current.child != null){
            if(current.next != null)
                nextNodes.push(current.next);
            current.next = current.child;
            current.next.prev = current;
            current.child = null;
        }
        
        prev = current;
        current = current.next;
    }

    return head;
};