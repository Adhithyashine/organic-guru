import express from 'express';
import authMiddleware from '../middleware/auth.js';
import { listOrders, placeOrderStripe,updateStatus,userOrders, verifyOrder, placeOrderCod } from '../controllers/orderController.js';

const orderRouter = express.Router();

orderRouter.get("/list",listOrders);
orderRouter.post("/userorders",authMiddleware,userOrders);
orderRouter.post("/place",authMiddleware,placeOrderStripe);
orderRouter.post("/status",updateStatus);
orderRouter.post("/verify",verifyOrder);
orderRouter.post("/placecod",authMiddleware,placeOrderCod);

export default orderRouter;