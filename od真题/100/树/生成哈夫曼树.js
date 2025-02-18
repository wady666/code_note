const readline = require('readline');

// 创建命令行读取接口实例
const rl = readline.createInterface({
    input: process.stdin,  // 标准输入流
    output: process.stdout // 标准输出流
});

// 监听第一行输入事件，获取节点数量
rl.on('line', (n) => {
    // 监听第二行输入事件，获取节点权值列表
    rl.on('line', (line) => {
        const values = line.split(' ').map(Number);  // 将输入的行按空格分割，并将每个元素转换为数字
        const root = buildHuffmanTree(values);  // 使用输入的值构建哈夫曼树，并获取根节点
        const result = [];  // 初始化中序遍历结果数组
        inorderTraversal(root, result);  // 对哈夫曼树进行中序遍历
        console.log(result.join(' '));  // 将中序遍历的结果数组转换为字符串并打印
        rl.close();  // 关闭读取接口
    });
});

// 定义节点类，用于构建哈夫曼树
class Node {
    constructor(value) {
        this.value = value;  // 节点的值
        this.left = null;    // 节点的左子节点
        this.right = null;   // 节点的右子节点
    }
}

// 定义最小优先队列类
class MinPriorityQueue {
    constructor() {
        this.elements = [];  // 存储队列元素的数组
    }

    // 入队操作
    enqueue(element) {
        this.elements.push(element);  // 将新元素添加到数组末尾
        this.elements.sort((a, b) => a.value - b.value);  // 对数组进行排序，确保最小元素在数组开头
    }

    // 出队操作
    dequeue() {
        return this.elements.shift();  // 移除并返回数组第一个元素
    }

    // 检查队列是否为空
    isEmpty() {
        return this.elements.length === 0;  // 队列为空时数组长度为0
    }
}

// 构建哈夫曼树的函数
function buildHuffmanTree(values) {
    const pq = new MinPriorityQueue();  // 创建最小优先队列实例
    values.forEach(value => pq.enqueue(new Node(value)));  // 为每个权值创建一个节点并加入队列

    while (pq.elements.length > 1) {
        const left = pq.dequeue();  // 弹出最小的节点作为左子节点
        const right = pq.dequeue();  // 弹出次小的节点作为右子节点

        const parent = new Node(left.value + right.value);  // 创建新节点，其权值为左右子节点之和
        parent.left = left;  // 设置新节点的左子节点
        parent.right = right;  // 设置新节点的右子节点
        pq.enqueue(parent);  // 将新节点加入优先队列
    }
    return pq.dequeue();  // 返回队列中的最后一个节点，即哈夫曼树的根节点
}

// 中序遍历函数
function inorderTraversal(node, result) {
    if (node) {
        inorderTraversal(node.left, result);  // 遍历左子树
        result.push(node.value);  // 访问当前节点，并加入结果数组
        inorderTraversal(node.right, result);  // 遍历右子树
    }
}

