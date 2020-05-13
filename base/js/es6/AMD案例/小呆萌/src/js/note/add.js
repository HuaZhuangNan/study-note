define(["jquery","router","require","service/noteService"],function($,router,require,noteService){
    
    return function(){
        router=require("router");

        var noteHTML=`
            <div>
                <form>
                    <button class="add">新增销售单据</button>
                    <button class="back">返回</button>
                </form>
            </div>
        `;

        var $note=$(noteHTML);
        $note.on("click",".back",function(){
            router.push({path:"/note"});
        }).on("click",".add",function(){
            noteService.add("BMW",parseInt(Math.random()*1000));
            router.push({path:"/note"})
        })
        $(".tab-content").html($note);


    }
})