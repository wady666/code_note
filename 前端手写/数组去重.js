// 1.使用Set
function uniqueArray(arr){
  return [...new Set(arr)]
}

// 2.使用filter
function uniqueArray2(arr){
  return arr.filters((item,index)=>{arr.indexOf(item) === index})
}

