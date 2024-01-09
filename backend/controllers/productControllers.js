import Product from '../models/product';
import APIFilters from '../utils/APIFilters';
const cron = require('node-cron');

export const newProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(200).json({
    product,
  });
};

export const getProducts = async (req, res, next) => {
  const resPerPage = 3;
  const productCount = await Product.countDocuments();
  const apiFilters = new APIFilters(Product.find(), req.query)
    .search()
    .filter();
  let product = await apiFilters.query;
  const filteredProductsCount = product.length;
  apiFilters.pagination(resPerPage);
  product = await apiFilters.query.clone();
  res.status(200).json({
    productCount,
    resPerPage,
    filteredProductsCount,
    product,
  });
};

export const getProduct = async (req, res, next) => {
  const { id } = req.query;
  const product = await Product.findById(id);
  if (!product) {
    return res.status(404).json({
      error: 'Data not found',
    });
  }
  res.status(200).json({
    product,
  });
};

export const deleteProduct = async (req, res, next) => {
  const { id } = req.query;
  const product = id && Product.deleteOne({ _id: id });
  res.status(200).json({
    product,
  });
};
