"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.driverRouter = void 0;
const authBearer_1 = require("./../middleware/authBearer");
const hono_1 = require("hono");
const driverController_1 = require("./driverController");
exports.driverRouter = new hono_1.Hono();
exports.driverRouter.get("/drivers", authBearer_1.bothRoleAuth, driverController_1.getDrivers);
exports.driverRouter.get("/drivers/:id", authBearer_1.bothRoleAuth, driverController_1.getDriver);
exports.driverRouter.post("/drivers", authBearer_1.adminRoleAuth, driverController_1.createDriver);
exports.driverRouter.put("/drivers/:id", authBearer_1.adminRoleAuth, driverController_1.updateDriver);
exports.driverRouter.delete("/drivers/:id", authBearer_1.adminRoleAuth, driverController_1.deleteDriver);
