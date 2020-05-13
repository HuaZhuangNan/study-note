$(function(){ 
  //默认传递了event事件对象 JQuery 已经兼容了
  
  //event
  /*
    type 事件类型字符串（string）
    target 事件绑定DOM元素 触发元素
    data 事件调用时额外数据  数字 字符串 数组 对象
    relatedTarget 移入移出目标DOM元素
    currentTarget 获取冒泡前DOM元素 等同于 this 监听到的元素
    pageX/pageY 获取相对页面原点 水平和垂直距离
    sccreenX/sccreenY 获取显示屏屏幕位置的水平/垂直坐标(非JQ封装) 
    clientX/clientY 获取相对于页面视口的水平/垂直坐标(非JQ封装)
    result 获取上个相同事件的返回值
    timeStamp 获取事件触发的事件戳
    which 获取鼠标的左中右(1,2,3);或者键盘按键
    // 获取是否按下键 返回布尔值
    altKey / shiftKey 
    ctrKey / metaKey(JQuery封装的)
  */
//   $("#but").bind("click",{55:55,66:66},function(e){
//     console.log(e.data);
//   });

  //冒泡默认行为  重叠关系上面到下面就是冒泡
  
  //阻止默认冒泡  e.stopPropagation();
  //isPropagationStopped(); 判断是否调用了阻止默认冒泡
  //阻止默认行为  e.preeventDefault();
  //isDefaultPrevented(); 判断是否调用了阻止默认冒泡
  
  //全部就用 return false;
  
  //取消冒泡并取消事件的后续事件(就是后面相同事件)处理函数 stopImmediatePropagation()
  //判断是否调用了is ImmediatePropagationStopped()
})
