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