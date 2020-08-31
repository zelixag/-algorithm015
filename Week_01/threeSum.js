var threeSum = function (nums) {
  // 去除边界情况
  if (!nums || nums.length <= 2) return [];
  // js的set无法取出相同数组，所以使用map结构结合key值唯一，替换掉相同的值
  let map = {};
  // 将数组排序，为了双指针移动做准备
  nums = nums.sort((a, b) => a - b);

  for (let k = 0; k < nums.length - 2; ++k) {
    // 目标值不能大于零，大于零跳出循环，不需要再计算
    if (nums[k] > 0) break;
    // 去除目标值相同，跳出此次循环
    if (k > 0 && nums[k] === nums[k - 1]) continue;
    // 定义 双指针 i 和 j，一个是从k+1开始一个是从数组最末尾开始
    let i = k + 1,
      j = nums.length - 1,
      sum = 0 - nums[k];

    while (i < j) {
      // 复合题干要求的取值，并移动指针。因为数组已经排序，所以如果小于target值，移动左指针右移。如果大圩target值，移动右指针左移变小
      if (nums[i] + nums[j] === sum) {
        map[`${nums[i]}${nums[j]}${nums[k]}`] = [nums[i], nums[j], nums[k]];
        // 如果移动指针发现，下一个指针指向的值和上一个相等则跳过
        while (i < j && nums[i] === nums[i + 1]) ++i;
        while (i < j && nums[j] === nums[j - 1]) --j;
        ++i, --j;
      } else if (nums[i] + nums[j] < sum) i++;
      else j--;
    }
  }
  //  去map value得数组
  return Object.values(map);
};
