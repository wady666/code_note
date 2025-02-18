let input = '2 9 J 10 3 4 K A 7 Q A 5 6'

let arr = input.split(' ')
const map = {
    '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8,
    '9': 9, '10': 10, 'J': 11, 'Q': 12, 'K': 13,
    'A': 14, '2': 16
};
const newArr = arr.filter((item)=> item !== '2').sort((a,b)=>map[a]-map[b])

let slow = 0
let fast = 1
const ans = []
while(fast < newArr.length){
    if(map[newArr[fast]] -map[newArr[fast-1]] === 1){
        fast++;
        continue;
    }else{
        if(fast - slow >4){
            ans.push(newArr.slice(slow,fast))
        }
    }
    slow = fast
    fast++
}
if(ans.length){
    ans.map((item)=>{
        console.log(item.join(' '))
    })
}else {
    console.log('NO')
}

// 引入 readline 模块并创建接口用于读取来自标准输入(stdin)的数据
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 定义一个映射扑克牌面到数字的对象，方便后续比较大小
const CARD_TO_NUMBER = {
    '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8,
    '9': 9, '10': 10, 'J': 11, 'Q': 12, 'K': 13,
    'A': 14, '2': 16
};

// 读取一行输入
rl.on('line', (input) => {
    // 按空格分割输入的字符串，得到牌的数组
    let cards = input.split(' ');
    // 根据牌面大小对牌进行排序
    cards.sort((a, b) => CARD_TO_NUMBER[a] - CARD_TO_NUMBER[b]);

    let straights = [];  // 存储所有可能的顺子序列
    let currentStraight = [cards[0]];  // 初始化当前顺子序列
    straights.push(currentStraight);  // 将当前顺子序列加入到列表中

    // 从第二张牌开始遍历所有牌
    for (let i = 1; i < cards.length; i++) {
        let card = cards[i];
        let added = false;  // 标记当前牌是否已被添加到某个顺子中

        // 尝试将当前牌加入到已存在的顺子序列中
        for (let straight of straights) {
            // 判断当前牌是否可以追加到顺子的末尾
            if (CARD_TO_NUMBER[card] - CARD_TO_NUMBER[straight[straight.length - 1]] === 1) {
                straight.push(card);
                added = true;
                break;
            }
        }

        // 如果当前牌没有加入到任何顺子中，创建一个新的顺子序列
        if (!added) {
            let newStraight = [card];
            straights.push(newStraight);
        }
    }

    // 筛选出长度至少为5的有效顺子序列
    let validStraights = straights.filter(straight => straight.length >= 5);

    // 如果没有找到有效的顺子序列，输出"No"
    if (validStraights.length === 0) {
        console.log("No");
    } else {
        // 对所有有效的顺子进行排序，并输出
        validStraights.sort((a, b) => CARD_TO_NUMBER[a[0]] - CARD_TO_NUMBER[b[0]]);
        validStraights.forEach(straight => console.log(straight.join(' ')));
    }

    rl.close(); // 关闭readline接口
});
