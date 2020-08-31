
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 弄个哨兵节点，遍历 两辆交换

var swapPairs = function(head) {
    // 放哨兵指向传进来列表
    let thead = new ListNode(0);
    thead.next = head;

    // 搞个临时节点，相邻交换位置用
    let tmp = thead;
    // 通解 tmp 每次都是交换两个节点的的起点 哨兵
    while(tmp.next != null && tmp.next.next != null){
        // 交换的开始
        let start = tmp.next;
        // 交换的结束
        let end = start.next;
        // 将要调换的结束节点保存，用于下次遍历的起点哨兵
        tmp.next = end;
        // 调换位置
        start.next = end.next;
        end.next = start;
        
        tmp = start;
    }
    return thead.next;
};