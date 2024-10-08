import express from "express";
import userController from "../controllers/user.controller";
import validateSchema from "../middlewares/validateSchema";
import commentController from "../controllers/comment.controller";
import userSchema from "../schemas/user.schema";
import loginSchema from "../schemas/login.schema";
import auth from "../middlewares/auth";

export const router = express.Router();

router.post("/", validateSchema(userSchema), userController.create);
router.post("/login", validateSchema(loginSchema), userController.login);
router.post("/comments", auth, commentController.create); 

router.get("/all", userController.getAll);

router.get("/:profile", auth, userController.get);

router.get("/:id", userController.get);

router.put("/:id", userController.update);

router.delete("/:id", userController.delete);
