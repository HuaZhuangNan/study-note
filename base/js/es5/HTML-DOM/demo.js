//先获取节点

window.onload = function(){

    var table = document.getElementsByTagName('table')[0];//获取第一个table标签

    //获取，赋值
    console.log(table.caption.innerHTML);//获取第一个table的标题
    table.caption.innerHTML="赋值";//可以直接赋值
    console.log(table.tHead);//表头
    console.log(table.tFoot);//表尾
    console.log(table.tBodies);//表主体
    console.log(table.rows);//行数(tr)的集合
    console.log(table.rows.length);//行数的个数
    console.log(table.tBodies[0].rows.length);//表主体里的行数
    console.log(table.tBodies[0].rows[0]);//主体里第一个tr
    console.log(table.tBodies[0].rows[0].cells.length);//主体里第一个tr里面单元格个数
    console.log(table.tBodies[0].rows[1].cells[1].innerHTML);//表示第一个主体下的第一个tr第二个单元格
    //删除
     table.deleteCaption();//删除标题
     table.deleteTHead();//删除表头
     table.tBodies[0].deleteRow(0);//删除第一行
     table.tBodies[0].rows[1].deleteCell(1);//删除第二行第二个单元格

     //创建表格
     var table = document.createElement('table');
     table.width = 300 ;
     table.border = 1;
     table.align = "center";
     //添加数据
     table.createCaption().innerHTML = "人员表2";
     //创建表头
     var thead = table.createTHead();
     var tr = thead.insertRow(0);//创建一个tr
     for(i=0;i<3;i++){
        tr.insertCell(0).innerHTML="数据"+(3-i);//创建td，并且赋值,写入数据是一个个从左边写过去的
     }
     //创建表体

     //创建表尾

     document.body.appendChild(table);//在body标签后面添加一个表格


}