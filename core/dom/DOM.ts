namespace guido.core.dom
{

    export class DOM
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
    }
}