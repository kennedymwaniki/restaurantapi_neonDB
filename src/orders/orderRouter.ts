import {
  bothRoleAuth,
  adminRoleAuth,
  userRoleAuth,
} from "./../middleware/authBearer";
import { Hono } from "hono";
import {
  listOrders,
  createOrder,
  deleteOrder,
  getOrder,
  updateOrder,
  getOrdersByDriverId,
} from "./orderController";

export const orderRouter = new Hono();
orderRouter.get("/ordersDriver/:id", getOrdersByDriverId);

orderRouter.get("/orders", bothRoleAuth, listOrders);
orderRouter.get("/orders/:id", bothRoleAuth, getOrder);
orderRouter.post("/orders", adminRoleAuth, createOrder);
orderRouter.put("/orders/:id", adminRoleAuth, updateOrder);
orderRouter.delete("/orders/:id", adminRoleAuth, deleteOrder);
