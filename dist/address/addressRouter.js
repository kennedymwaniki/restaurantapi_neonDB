"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressRouter = void 0;
const hono_1 = require("hono");
const addressController_1 = require("./addressController");
const authBearer_1 = require("../middleware/authBearer");
exports.addressRouter = new hono_1.Hono();
exports.addressRouter.get("/address", authBearer_1.bothRoleAuth, addressController_1.listAddress);
exports.addressRouter.post("/address", authBearer_1.adminRoleAuth, addressController_1.createAddress);
exports.addressRouter.get("/address/:id", authBearer_1.bothRoleAuth, addressController_1.getAddress);
exports.addressRouter.delete("/address/:id", addressController_1.deleteAddress);
exports.addressRouter.put("/address/:id", authBearer_1.adminRoleAuth, addressController_1.updateAddress);
