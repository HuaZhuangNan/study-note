define([],function(){

    return {
        getList(){
            var noteListStr=localStorage.getItem("noteList");
            if(!noteListStr) noteListStr="[]";
            var noteList=JSON.parse(noteListStr);
            return noteList;
        },
        add(type,price){
            debugger;
            var noteList=this.getList();

            //添加新单据
            noteList.push({type,price});

            var noteListStr=JSON.stringify(noteList);
            localStorage.setItem("noteList",noteListStr);
        },
        get(){

        }
    }
})