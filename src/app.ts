import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Carriers } from './routes/carriers';
import { IndexPage } from './routes/indexPage';

class App {

    public app: express.Application;
    public carriesRoutes: Carriers = new Carriers();
    public indexPageRoutes: IndexPage = new IndexPage();

    constructor() {
        this.app = express(); //express instance
        this.config();
        this.indexPageRoutes.routes(this.app);
        this.carriesRoutes.routes(this.app);
    }

    private config(): void {
        // support json type
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({
            extended: false
        }));
    }

}

export default new App().app;