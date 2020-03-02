import Controller from './Controller';
import RestaurantService from '../services/RestaurantService';
import Restaurant from '../models/Restaurant';

const restaurantService = new RestaurantService(
   new Restaurant().getInstance()
);

class RestaurantController extends Controller {
   constructor(service) {
      super(service);
   }
}

export default new RestaurantController(restaurantService);