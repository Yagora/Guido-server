import {Request, Response} from 'express';
import * as path from 'path';

const INDEX_PAGE_PATH = path.join(__dirname, '../index.html');

export class IndexPage { 

    public routes(app): void {
        app.route('/')
        .get((req: Request, res: Response) => {
            res.status(200).sendFile(INDEX_PAGE_PATH);
        })
    }
}