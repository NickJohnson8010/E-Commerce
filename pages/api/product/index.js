import { createRouter } from 'next-connect';
import dbConnect from '@/backend/config/dbConnect';
import {
  deleteProduct,
  getProducts,
  newProduct,
} from '@/backend/controllers/productControllers';

const router = createRouter();
dbConnect();

router.post(newProduct);
router.get(getProducts);
router.delete(deleteProduct);
export default router.handler();
