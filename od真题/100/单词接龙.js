const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 根据当前单词列表和后缀字母获取下一个单词
function getNextWord(wordList, suffix) {
    let map = {};
    
    // 将单词按首字母分组存储在map中
    for (let word of wordList) {
        let firstChar = word[0];
        let tempList = map[firstChar] || [];
        tempList.push(word);
        map[firstChar] = tempList;
    }
    
    let maxLength = 0;
    let minWord = "";
    
    // 获取与后缀字母相同的单词列表
    let tempList = map[suffix];
    
    if (!tempList) {
        return null;
    }
    
    // 遍历单词列表，找到长度最长且字典序最小的单词
    for (let word of tempList) {
        if (word.length > maxLength || (word.length === maxLength && word < minWord)) {
            maxLength = word.length;
            minWord = word;
        }
    }
    
    return minWord || null;
}

let startIndex = -1;
let number = -1;
let wordList = [];
let count = 0;

rl.on("line", (line) => {
    // 读取输入的起始单词索引
    if(startIndex ===-1){
        startIndex = parseInt(line);
    }
    // 读取输入的单词个数
    else if(number ===-1 ){
        number = parseInt(line);
    }
    // 读取输入的单词列表
    else{
        wordList.push(line.trim());
        count++;

        // 当读取完所有单词时，开始进行单词接龙
        if (count === number) {
            rl.close();

            let result = wordList[startIndex];
            wordList.splice(startIndex, 1);

            let nextWord = getNextWord(wordList, result[result.length - 1]);

            // 循环找到下一个单词并拼接到结果中，直到找不到下一个单词为止
            while (nextWord) {
                result += nextWord;
                wordList.splice(wordList.indexOf(nextWord), 1);
                nextWord = getNextWord(wordList, result[result.length - 1]);
            }

            console.log(result);
        }
    }
});

