import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as mongoose from "mongoose";
import { Carrier } from './routes/carrier';
import { IndexPage } from './routes/indexPage';

class App {

    public mongoUrl: string = 'mongodb://localhost/Guido-db';
    public app: express.Application;
    public carriesRoutes: Carrier = new Carrier();
    public indexPageRoutes: IndexPage = new IndexPage();

    constructor() {
        this.app = express(); //express instance
        this.config();
        this.indexPageRoutes.routes(this.app);
        this.carriesRoutes.routes(this.app);
        this.mongoSetup();
    }

    private config(): void {
        // support json type
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({
            extended: false
        }));
    }

    private mongoSetup(): void{
        mongoose.connect(this.mongoUrl);
    }

}

export default new App().app;