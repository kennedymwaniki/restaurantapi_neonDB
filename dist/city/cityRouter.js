"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cityRouter = void 0;
const hono_1 = require("hono");
// import { listCities } from "./cityController";
const cityController_1 = require("./cityController");
const authBearer_1 = require("../middleware/authBearer");
exports.cityRouter = new hono_1.Hono();
exports.cityRouter.get("/cities", authBearer_1.bothRoleAuth, cityController_1.listCities);
exports.cityRouter.get("/cities/:id", authBearer_1.bothRoleAuth, cityController_1.getCity);
exports.cityRouter.post("/cities", authBearer_1.adminRoleAuth, cityController_1.createCity);
exports.cityRouter.delete("/cities/:id", authBearer_1.adminRoleAuth, cityController_1.deleteCity);
// cityRouter.get("/cities/:id", listCities);
exports.cityRouter.put("/cities/:id", authBearer_1.adminRoleAuth, cityController_1.updateCity);
