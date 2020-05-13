define(["Route","note/index","shop/index","person/index","note/add"],function(Route,note,shop,person,noteAdd){
    const router=new Route({
        routes:[
            {path:"/",redirect:"/note"},
            {path:"/note",component:note},
            {path:"/shop",component:shop},
            {path:"/person",component:person},
            {path:"/note/add",component:noteAdd}
        ]
    });

    return router;
})