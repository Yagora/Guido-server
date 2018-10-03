namespace guido.web
{

    export class Router
    {
        private window: Window;
        private name: string;
        private routes: string[];

        constructor( window: Window,name: string, routes: string[] )
        {
            this.window = window;
            this.name = name;
            this.routes = routes;
        }

        /**
         * Get the Router
         */
        public getRouter(): this
        {
            return this;    
        }
    }
}