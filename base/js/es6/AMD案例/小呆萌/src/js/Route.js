define([], function () {
    function Route(option) {
        this.routes = option.routes;
        this.init();
    }
    Route.prototype = {
        constructor: Route,
        init() {
            //监听hash变化，从而切换路由
            window.addEventListener(
                "hashchange",
                this.hashchange.bind(this) );

            //获取初次路由
            this.hashchange();

        },
        hashchange(){
            let hash = location.hash.substring(1);
            let route = this.routes.find(v => v.path === hash);
            if (route) {
                if (route.redirect) {
                    route = this.routes.find(v => v.path === route.redirect);
                }

                if (route && route.component) {
                    route.component();
                }
            }
        },
        push(opt) {
            if (opt && opt.path) {
                location.hash = "#" + opt.path;
            }
        }
    }
    return Route;
})