namespace guido.web
{

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

        public static loadApplication(): void
        {
            document.getElementById( "app" ).appendChild( Home.build() );
        }
    }

    window.onload = () => 
    {
        console.log( "DOM has loaded" );
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
        console.log( Starter.router );
        Starter.loadApplication();
    }
}