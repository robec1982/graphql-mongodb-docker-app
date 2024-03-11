import { Widgets } from './dbConnectors';

export const resolvers = {
    getProduct: async({ id }) => {
        try {
            console.log(`Requesting product with ID ${id}.`);
            let product = await Widgets.findById(id);
            console.log(`Product document found ${product}.`);
            if (product) {
                return product;
            }
            else throw Error(JSON.stringify({ code: 204, message: `Product not found with the ID ${id}.` }));
        } catch (error){
            console.error(`An error occurred while requesting the product with ID ${id}.`);
            return error;
        }
    },

    createProduct: ({input}) => {
        // let id = require('crypto').randomBytes(10).toString('hex');
        // productDatabase[id] = input;
        // return new Product(id, input);
    }
};

export default resolvers;