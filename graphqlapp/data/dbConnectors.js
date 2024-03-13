import mongoose from 'mongoose';
require("dotenv").config();

// Mongo connection
async function connectMongo() {
    try {
        await mongoose.connect(`mongodb://mongodb:27017/${process.env.MONGODB_DATABASE}`, {});
        console.log(`Connected to MongoDB.`);
    }
    catch (error) {
        console.log('Error connecting to MongoDB', error);
    }
}

connectMongo();

const widgetSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
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