namespace guido.web
{
    import dom = guido.core.dom;

    export class Starter
    {
        public static router: Router;

        /**
         * Router
         */
        public static createRouter( w: Window, n: string, r: any[] ): Router
        {
            this.router = new Router( w, n, r );
            return this.router;
        }
    }

    window.onload = () => 
    {
        Starter.createRouter(
            window,
            "myFirstRouter",
            [
                {
                    path : "/",
                    name : "Router"
                },
                {
                    path : "/about",
                    name : "About"
                },
                {
                    path : "/contact",
                    name : "Contact"
                },
            ] 
        );

    }
}