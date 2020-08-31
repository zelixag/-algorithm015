// 思路; loop 每次循环遍历都拿下链表相邻的两个节点，相互调换
var reverseList = function (head) {
  if (!head) return head;
  let cur = head;
  while (head.next) {
    // 第一步缓存下下一步对象
    let t = head.next.next;
    // 反转指向
    head.next.next = cur;
    // 移动指针
    cur = head.next;
    // 将head第一个值指向 零食切断的需要处理的列表 t
    head.next = t;
  }
  return cur;
};
