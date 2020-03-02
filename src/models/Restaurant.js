import mongoose, {Schema} from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

class Restaurant {
   initSchema() {
      const schema = new Schema({
         photo: {
            type: String,
         },
         name: {
            type: String,
            required: true
         },
         address: {
            type: String,
            required: true
         },
         businessHours: {
            type: String,
            required: true
         }
      }, {timestamps: true});

      schema.plugin(uniqueValidator);
      mongoose.model("restaurants", schema);
   }

   getInstance(){
      this.initSchema();
      return mongoose.model("restaurants");
   }
}

export default Restaurant;