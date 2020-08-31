/**
 * @param {number[]} height
 * @return {number}
 */
// var maxArea = function(height) {
//     let max = 0
//     for(let i = 0; i < height.length - 1;++i) {
//         for(let j = i + 1; j < height.length;++j) {
//             const area = (j - i)*Math.min(height[i], height[j])
//             max = Math.max(max, area)
//         }
//     }
//     return max
// };
var maxArea = function (height) {
  let max = 0;
  let minHeight = 0;
  for (let i = 0, j = height.length - 1; i < height.length, j > 0; ) {
    minHeight = height[i] < height[j] ? height[i++] : height[j--];
    max = Math.max(max, (j - i + 1) * minHeight);
  }
  return max;
};

// 1. 做个两层遍历 且内一层遍历开始的位置不许要和第一层是同样的索引
// 内部遍历找到每次找到最长的节点 然后再计算两个较长的柱子乘以宽最大的面积则是需要的面积

// 2. 第二种就是在两边开始遍历，他的宽是最大的。大家都是往中间收。如果里面的高度小于外面的柱子的高度不移动，如果大的话就移动
