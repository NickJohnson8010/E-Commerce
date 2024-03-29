import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter the product name'],
  },
  description: {
    type: String,
    required: [true, 'Please enter the product description'],
  },
  price: {
    type: Number,
    required: [true, 'Please enter the product price'],
  },
  images: [
    {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
  ],
  category: {
    type: String,
    required: [true, 'Please enter the product category'],
    enum: {
      values: [
        'Electronics',
        'Camera',
        'Laptops',
        'Accesories',
        'Headphones',
        'Mobiles',
        'CLothing',
      ],
      message: 'Please select correct category',
    },
  },
  seller: {
    type: String,
    required: [true, 'Please enter the product seller'],
  },
  stock: {
    type: Number,
    required: [true, 'Please enter the product stock'],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
export default mongoose.models.Product ||
  mongoose.model('Product', productSchema);
