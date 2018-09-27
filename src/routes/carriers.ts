import {Request, Response} from "express";

export class Carriers { 

    public routes(app): void {
        app.route('/carriers')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                succes: true
            });
        })
    }
}