const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 读取输入
rl.on('line', (line) => {
  if (!this.tasks) {
    // 第一次输入，处理任务工作量
    this.tasks = line.split(' ').map(Number);
  } else {
    // 第二次输入，处理员工数量
    const N = Number(line);
    // 输出最快完成所有工作的天数
    console.log(minimumTimeRequired(this.tasks, N));
    rl.close();
  }
});

// 计算完成所有任务所需的最少天数
function minimumTimeRequired(tasks, k) {
  // 将任务按工作量降序排序
  tasks.sort((a, b) => b - a);
  
  // 使用二分查找确定完成所有任务的最短时间
  let l = tasks[0], r = tasks.reduce((a, b) => a + b, 0);
  while (l < r) {
    let mid = Math.floor((l + r) / 2);
    // 检查当前时间限制是否足够完成所有任务
    if (canFinish(tasks, k, mid)) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  
  // 返回最短完成时间
  return l;
}

// 检查是否可以在给定的时间限制内完成所有任务
function canFinish(tasks, k, limit) {
  // 创建一个数组来记录每个员工的工作量
  let workers = new Array(k).fill(0);
  // 使用回溯法检查是否可以完成
  return backtrack(tasks, workers, 0, limit);
}

// 回溯法
function backtrack(tasks, workers, index, limit) {
  // 如果所有任务都已分配，则返回true
  if (index >= tasks.length) {
    return true;
  }
  
  // 获取当前任务的工作量
  let current = tasks[index];
  // 尝试将当前任务分配给每个员工
  for (let i = 0; i < workers.length; i++) {
    // 如果当前员工可以在时间限制内完成这项任务
    if (workers[i] + current <= limit) {
      // 分配任务给当前员工
      workers[i] += current;
      // 继续尝试分配下一个任务
      if (backtrack(tasks, workers, index + 1, limit)) {
        return true;
      }
      // 回溯，取消当前的任务分配
      workers[i] -= current;
    }
    
    // 如果当前员工没有任务或者加上当前任务刚好达到时间限制，则不需要尝试其他员工
    if (workers[i] === 0 || workers[i] + current === limit) {
      break;
    }
  }
  
  // 如果无法分配当前任务，则返回false
  return false;
}
