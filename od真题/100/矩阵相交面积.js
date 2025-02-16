var readline = require('readline');

// 创建接口用于读取标准输入
var rl = readline.createInterface({
  input: process.stdin, // 输入来自标准输入（键盘输入）
  output: process.stdout // 输出到标准输出（控制台）
});

var x_coords = []; // 用于存储所有矩形的x坐标
var y_coords = []; // 用于存储所有矩形的y坐标
var rectangles = []; // 用于存储每个矩形的左上角和右下角坐标

// 监听每行输入的事件
rl.on('line', function(line){
  // 将输入的每一行按空格分割，并将其转换为数字数组
  var inputs = line.split(' ').map(Number);
  var x1 = inputs[0]; // 矩形左上角的x坐标
  var y1 = inputs[1]; // 矩形左上角的y坐标
  var w = inputs[2];  // 矩形的宽度
  var h = inputs[3];  // 矩形的高度

  var x2 = x1 + w;  // 计算矩形右下角的x坐标
  var y2 = y1 - h;  // 计算矩形右下角的y坐标

  // 将矩形的x坐标加入x_coords数组
  x_coords.push(x1, x2);
  // 将矩形的y坐标加入y_coords数组
  y_coords.push(y1, y2);
  // 将矩形的完整坐标（左上角和右下角）存入rectangles数组
  rectangles.push([x1, y1, x2, y2]);

  // 当已经读取到三个矩形时，结束输入
  if(rectangles.length === 3){
    rl.close(); // 关闭输入流
  }
});

// 当输入结束时触发此事件
rl.on('close', function(){
  // 计算所有矩形的x坐标中的最小值和最大值
  var min_x_coord = Math.min(...x_coords);
  var max_x_coord = Math.max(...x_coords);
  // 计算所有矩形的y坐标中的最小值和最大值
  var min_y_coord = Math.min(...y_coords);
  var max_y_coord = Math.max(...y_coords);

  // 计算x坐标和y坐标的偏移量，将所有坐标平移到非负范围
  var x_offset = 0 - min_x_coord;
  var y_offset = 0 - min_y_coord;

  // 创建一个二维数组 intersection_area，表示整个区域
  // 数组的大小为矩形的最大x和最小x之间的差值，以及最大y和最小y之间的差值
  var intersection_area = new Array(Math.abs(max_x_coord - min_x_coord))
    .fill(0)
    .map(() => new Array(Math.abs(max_y_coord - min_y_coord)).fill(0));

  // 遍历每个矩形
  for(var i = 0; i < rectangles.length; i++){
    var x1 = rectangles[i][0]; // 矩形左上角的x坐标
    var y1 = rectangles[i][1]; // 矩形左上角的y坐标
    var x2 = rectangles[i][2]; // 矩形右下角的x坐标
    var y2 = rectangles[i][3]; // 矩形右下角的y坐标

    // 遍历矩形的x坐标范围，填充到二维数组中
    for(var j = Math.min(x2, x1) + x_offset; j < Math.max(x2, x1) + x_offset; j++){
      // 遍历矩形的y坐标范围，填充到二维数组中
      for(var k = Math.min(y2, y1) + y_offset; k < Math.max(y2, y1) + y_offset; k++){
        intersection_area[j][k]++; // 对应的二维数组位置计数加1，表示该区域被覆盖
      }
    }
  }

  var ret = 0; // 用于存储同时被三个矩形覆盖的区域的数量

  // 遍历整个二维数组，统计被三个矩形同时覆盖的区域
  for(var i = 0; i < intersection_area.length; i++){
    for(var j = 0; j < intersection_area[0].length; j++){
      if(intersection_area[i][j] === 3){ // 如果该区域被三个矩形覆盖
        ret++; // 计数增加
      }
    }
  }

  // 输出最终结果，即重叠的面积
  console.log(ret);
});
