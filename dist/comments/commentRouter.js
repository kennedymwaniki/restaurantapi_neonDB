"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentRouter = void 0;
const hono_1 = require("hono");
const commentController_1 = require("./commentController");
const authBearer_1 = require("../middleware/authBearer");
exports.commentRouter = new hono_1.Hono();
exports.commentRouter.get("/comments", authBearer_1.bothRoleAuth, commentController_1.listComments);
exports.commentRouter.get("/comments/:id", authBearer_1.bothRoleAuth, commentController_1.getComments);
exports.commentRouter.post("/comments", authBearer_1.adminRoleAuth, commentController_1.createComment);
exports.commentRouter.delete("/comments/:id", authBearer_1.adminRoleAuth, commentController_1.deleteComment);
exports.commentRouter.put("/comments/:id", authBearer_1.adminRoleAuth, commentController_1.updateComment);
