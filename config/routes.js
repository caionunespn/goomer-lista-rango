import RestaurantController from '../src/controllers/RestaurantController';

export default (server) => {
   server.get(`/api/restaurant`, RestaurantController.getAll);
   server.get(`/api/restaurant/:id`, RestaurantController.getOne);
   server.post(`/api/restaurant`, RestaurantController.insert);
   server.put(`/api/restaurant/:id`, RestaurantController.update);
   server.delete(`/api/restaurant/:id`, RestaurantController.delete);
}