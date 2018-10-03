namespace guido.web
{

    export class Home
    {

        public static build(): HTMLElement
        {
            let container = HTML.create( "div" );
            container.className = "container";

            let button = HTML.create( "button" );
            button.innerText = "MyFirstButton";
            button.addEventListener( "click", () => 
            {
                console.log( "yo" )
            } );

            container.appendChild( button );

            return container;
        }
    }
}