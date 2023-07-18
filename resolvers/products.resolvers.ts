export const productsQueries = {
  getAllProducts: (_, x, { dataSources }) => {
    return dataSources.ProductsApi.getAllProducts();
  },
  getProduct: (_, { id }, { dataSources }) => {
    return dataSources.ProductsApi.getAllProductById();
  },
};

export const productsMutations = {
  createProduct: (_, arg, { dataSources }) => {
    return dataSources.ProductsApi.createProduct(arg);
  },

  updateProduct: (_, arg, { dataSources }) => {
    return dataSources.ProductsApi.updateProduct(arg);
  },

  deleteProduct: (_, { id }, { dataSources }) => {
    return dataSources.ProductsApi.deleteProduct(id);
  },
};
