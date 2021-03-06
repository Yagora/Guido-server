namespace guido.web
{

    export class HTML
    {

        public static create( e: string ): HTMLElement
        {
            switch( e )
            {
                case "div": 
                {
                    return this.createDivElement();
                }
                case "span": 
                {
                    return this.createSpanElement();
                }
                case "button": 
                {
                    return this.createButtonElement();
                }
            }
        }

        private static createDivElement(): HTMLDivElement
        {
            return document.createElement( "div" );
        }
        
        private static createSpanElement(): HTMLSpanElement
        {
            return document.createElement( "span" );
        }

        private static createButtonElement(): HTMLButtonElement
        {
            return document.createElement( "button" );
        }
    }
}