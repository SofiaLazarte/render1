const getProduct = (req, res) => {
    res.send("Getting product");
  };
  
  const createProduct = (req, res) => {
    res.send("Creat product");
  };
  
  module.exports = {
    getProduct,
    createProduct,
  };