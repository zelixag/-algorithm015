// 思路: 是用栈的数据结构，将左适配串压栈进入，遇到右是配串判断是否匹配，匹配出栈进行下次匹配。栈内元素为0，则返回true，
var isValid = function (s) {
  let stack = [];
  // 技巧适配左边串，压栈右边串
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(")");
    } else if (s[i] === "[") {
      stack.push("]");
    } else if (s[i] === "{") {
      stack.push("}");
    } else if (!stack.length || stack.pop() !== s[i]) return false;
  }
  return stack.length === 0;
};
