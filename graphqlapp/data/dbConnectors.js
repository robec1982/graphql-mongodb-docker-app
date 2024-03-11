import mongoose from 'mongoose';
require("dotenv").config();

// Mongo connection
mongoose.Promise = global.Promise;
// mongoose.connect(`mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@mongodb:27017/${process.env.MONGODB_DATABASE}`, {});
mongoose.connect(`mongodb://mongodb:27017/${process.env.MONGODB_DATABASE}`, {});

const widgetSchema = new mongoose.Schema({
    name: {
        type: String
    },
    descrtion: {
        type: String
    },
    price: {
        type: Number
    },
    soldout: {
        type: String
    },
    inventory: {
        type: Number
    },
    stores: {
        type: Array
    }
});

const Widgets = mongoose.model('widgets', widgetSchema);

export { Widgets };