import { CarrierController } from '../controllers/carrierController'

export class Carrier { 

    public carrierController: CarrierController = new CarrierController();

    public routes(app): void {
        // get all carriers
        app.route('/carriers')
        .get(this.carrierController.getCarriers);
        // get just one carrier
        app.route('/carriers/:CarrierId')
        .get(this.carrierController.getCarrier);
        app.route('/carriers')
        .post(this.carrierController.addNewCarrier);
        app.route('/carriers/:CarrierId')
        .put(this.carrierController.updateCarrier);
        app.route('/carriers/:CarrierId')
        .delete(this.carrierController.deleteCarrier);
    }
}