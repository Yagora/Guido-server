import {Request, Response} from 'express';
import * as path from 'path';

const INDEX_PAGE_PATH = path.join(__dirname, '../../web/index.html');
const STARTER_SCRIPT_PATH = path.join(__dirname, '../../web/Starter.js');
const ROUTER_SCRIPT_PATH = path.join(__dirname, '../../web/Router.js');

export class IndexPage { 

    public routes(app): void {
        app.route('/')
        .get((req: Request, res: Response) => {
            res.status(200).sendFile(INDEX_PAGE_PATH);
        });
        app.route('/starter.js')
        .get((req: Request, res: Response) => {
            res.status(200).sendFile(STARTER_SCRIPT_PATH);
        });
        app.route('/router.js')
        .get((req: Request, res: Response) => {
            res.status(200).sendFile(ROUTER_SCRIPT_PATH);
        });
    }
}