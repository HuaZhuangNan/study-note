require.config({
    baseUrl:"./js",
    paths:{
        jquery:"lib/jquery-3.3.1",
        service:"../service"
    }
});

require(["jquery","router"],function($,router){
    
    $(".tab-header").on("click",".note",function(){
        
        router.push({ path:"/note" })
    }).on("click",".shop",function(){
        
        router.push({ path:"/shop" })
    }).on("click",".person",function(){

        router.push({ path:"/person" })
    });

    // $(".tab-header .note").trigger("click");
})