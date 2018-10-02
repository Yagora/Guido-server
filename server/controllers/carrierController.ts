import * as mongoose from 'mongoose';
import { CarrierSchema } from '../models/carrierModel';
import { Request, Response } from 'express';

const Carriers = mongoose.model('Carrier', CarrierSchema);

export class CarrierController{
    public addNewCarrier (req: Request, res: Response) {
        let newCarrier = new Carriers(req.body);
        
        newCarrier.save((err, Carrier) => {
            if(err){
                res.send(err);
            }    
            res.json(Carrier);
        });
    }

    public getCarriers (req: Request, res: Response) {
        Carriers.find({}, (err, Carriers) => {
            if(err){
                res.send(err);
            }
            res.json(Carriers);
        });
    }

    public getCarrier (req: Request, res: Response) {           
        Carriers.findById(req.params.CarrierId, (err, Carrier) => {
            if(err){
                res.send(err);
            }
            res.json(Carrier);
        });
    }

    public updateCarrier (req: Request, res: Response) {           
        Carriers.findOneAndUpdate({ _id: req.params.CarrierId }, req.body, { new: true }, (err, Carrier) => {
            if(err){
                res.send(err);
            }
            res.json(Carrier);
        });
    }

    public deleteCarrier (req: Request, res: Response) {           
        Carriers.remove({ _id: req.params.CarrierId }, (err) => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted Carriers!'});
        });
    }
    
}