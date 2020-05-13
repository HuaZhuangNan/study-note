define(["jquery"],function($){
    return function(){
        var noteHTML=`
            <div>
                <div>销售商列表</div>
                <p>
                    <button class="add">新增</button>
                </p>
                <table>
                    <tr>
                        <td>第一列</td>
                        <td>第二列</td>
                        <td>第三列</td>
                    </tr>
                    <tr>
                        <td>第一列</td>
                        <td>第二列</td>
                        <td>第三列</td>
                    </tr>
                </table>
            </div>
        `
        var $note=$(noteHTML);
        $note.on("click",".add",function(){
            alert("新增一个销售商");
        });
        $(".tab-content").html($note);
    }
})