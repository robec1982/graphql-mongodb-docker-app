import { Widgets } from './dbConnectors';

export const resolvers = {
    getProduct: async({ id }) => {
        try {
            console.log(`Requesting product with ID ${id}.`);
            const product = await Widgets.findById(id);
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

    getAllProducts: async() => {
        try {
            console.log('Requesting all products...');
            let products = await Widgets.find({});
            console.log(`${products.length} product(s) found.`);
            if (products) {
                return products;
            }
            else throw Error(JSON.stringify({ code: 204, message: 'Problem found while retrieving products.' }));
        } catch (error){
            console.error(`An error occurred while retrieving the products: ${error}`);
            return error;
        }
    },

    createProduct: async ({input}) => {
        try {
            const product = new Widgets({
                name: input.name,
                description: input.description,
                price: input.price,
                soldout: input.soldout,
                inventory: input.inventory,
                stores: input.stores,
            });
            
            product.id = product._id;

            console.log(`Creating a new product ${product}.`);            
            let response = await product.save();
            if (response) {
                return product;
            }
            else throw Error(JSON.stringify({ code: 400, message: `Error while creating the product ${product}.` }));
        }
        catch (error) {
            console.error(`An error occurred while adding a new product: ${error}`);
            return error;
        }
    },
    
    updateProduct: async ({input}) => {
        try {
            console.log(`Updating the product ${input.id}.`);            
            let product = await Widgets.findOneAndUpdate({ _id: input.id }, input, { new: true });
            if (product) {
                return product;
            }
            else throw Error(JSON.stringify({ code: 400, message: `Error while updating the product with ID ${input.id}.` }));
        }
        catch (error) {
            console.error(`An error occurred while adding a new product: ${error}`);
            return error;
        }
    },

    deleteProduct: async ({ id }) => {
        try {
            console.log(`Deleting the product with the ID ${id}.`);            
            let product = await Widgets.findOneAndDelete({ _id: id });
            if (product) {
                console.log(`Product deleted successfully: ${product}.`);
                return product;
            }
            else throw Error(JSON.stringify({ code: 400, message: `Error while deleting the product with ID ${id}.` }));
        }
        catch (error) {
            console.error(`An error occurred while adding a new product: ${error}`);
            return error;
        }
    },
};

export default resolvers;